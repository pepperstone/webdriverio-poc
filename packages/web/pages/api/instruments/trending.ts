import type { NextApiRequest, NextApiResponse } from "next";
import cacheData from "memory-cache";

type Instrument = {
  symbol: string;
  ticker: string;
  description: string;
  display_ticker: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await handler_GET(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function handler_GET(req: NextApiRequest, res: NextApiResponse) {
  // Set the default category search to "all".
  const categories: string = (req.query.categories as string) ?? "All";

  // The Trending Instruments API requiers a '+' delimited list.
  const asset_classes = categories.split(",").join("+");

  // Get the Trending instruments.
  const trendingInstruments = await getTrendingInstruments(asset_classes);

  // Add more infomation to each Instrument.
  const instruments = trendingInstruments.top_instruments.map(
    async (ticker: string) => {
      // Get the Symbol. (MT5 Symbol for getting the quotes/bids)
      const symbol = await getSymbol(ticker);

      // Get the nice description.
      const symbolDesc = await getSymbolDesc(symbol);

      // Make sure the Ticker looks nice.
      const display_ticker = getDisplayTicker(ticker);

      return {
        symbol: symbol,
        ticker: ticker,
        description: symbolDesc,
        display_ticker: display_ticker,
      };
    }
  );

  const returnInstruments: Instrument[] = await Promise.all(instruments);

  // Cache the response.
  res.setHeader("Cache-Control", "max-age=1, stale-while-revalidate=1");

  res.status(200).json({ instruments: returnInstruments });
}

async function getTrendingInstruments(asset_classes: string) {
  type APIResponse = {
    asset_classes: string[];
    rank_by: string;
    period: string;
    level: string;
    num_instruments: number;
    version: string;
    uid: string;
    timestamp: string;
    top_instruments: string[];
    top_instruments_values: number[];
    top_instruments_scores: number[];
  };

  const API_URI =
    "https://trending-instruments.dev.ai.pepperstone.com/trending";

  // Setup the search parameters.
  const paramsObj = {
    rank_by: "volume_change",
    asset_classes: asset_classes,
    period: "from_market_open",
    level: "symbol",
    num_instruments: "1000",
  };
  const searchParams = new URLSearchParams(paramsObj);

  // Get the Treding Instruments data.
  const trendingData_res = await fetch(API_URI + "?" + searchParams.toString());

  // Is it ok?
  if (!trendingData_res.ok) {
    console.log(trendingData_res);
    throw Error(trendingData_res.statusText);
  }

  return (await trendingData_res.json()) as APIResponse;
}

async function getSymbol(ticker: string) {
  const symbolMap = await getSymbolMapping();

  if (!symbolMap.has(ticker)) {
    return "UNKNOWN";
  }

  return symbolMap.get(ticker);
}

async function getSymbolMapping() {
  type symbolMap = {
    symbol: string;
    coreSymbol: string;
    aliases: string;
    ticker: string;
    assetClass: string;
    symbolType: string;
    symbolSubType: string;
    rebateCategory: string;
    volumeCategory: string;
  };

  type SymbolMappingResp = {
    [key: string]: symbolMap;
  };

  const API_URI = "https://ems-staging.pepperstone.com/mapping?key=symbol";
  const CACHE_TIME = 24 * 60 * 60 * 1000; // 1 day.

  // Chech the cache first.
  const cacheValue = cacheData.get("symbolMap");
  if (cacheValue) {
    return cacheValue;
  }

  // Get the data.
  const symbolInfo_res = await fetch(API_URI);

  // Is it ok?
  if (!symbolInfo_res.ok) {
    console.log(symbolInfo_res);
    throw Error(symbolInfo_res.statusText);
  }

  const symbolInfo_json = (await symbolInfo_res.json()) as SymbolMappingResp;

  // Clean the data
  const symbolMap = new Map<string, string>();

  Object.keys(symbolInfo_json).forEach((value) => {
    // Only include CFD's & tickers with a value.
    // Also, ignore any Symbols that end in '.US'
    if (
      symbolInfo_json[value]?.assetClass === "CFD" &&
      symbolInfo_json[value]?.ticker !== "" &&
      value.substring(value.length - 3) !== ".US"
    ) {
      symbolMap.set(
        symbolInfo_json[value].ticker,
        symbolInfo_json[value].symbol
      );
    }
  });

  // Cache the results.
  cacheData.put("symbolMap", symbolMap, CACHE_TIME);

  return symbolMap;
}

async function getSymbolDesc(symbol: string) {
  if (symbol === "UNKNOWN" || symbol === "") {
    return "UNKNOWN";
  }

  type symbolDesc = {
    Description: string;
    ISIN: string;
    Category: string;
    Path: string;
    CurrencyBase: string;
    CurrencyProfit: string;
    CurrencyMargin: string;
    Digits: number;
    Point: number;
    Multiply: number;
    ContractSize: number;
  };

  type symbolDescResp = {
    [key: string]: symbolDesc;
  };

  const API_URI = "https://live-pricing.pepperstone.com/symbols";
  const CACHE_TIME = 24 * 60 * 60 * 1000; // 1 day.

  const api_url = API_URI + "?names=" + symbol;

  // Chech the cache first.
  const cacheValue = cacheData.get(api_url);
  if (cacheValue) {
    return cacheValue;
  }

  // Get the data.
  const symbolDesc_res = await fetch(api_url);

  // Is it ok?
  if (!symbolDesc_res.ok) {
    console.log(symbolDesc_res);
    throw Error(symbolDesc_res.statusText);
  }

  const symbolDesc_json = (await symbolDesc_res.json()) as symbolDescResp;

  // Cache the results.
  cacheData.put(api_url, symbolDesc_json[symbol]?.Description, CACHE_TIME);

  return symbolDesc_json[symbol]?.Description;
}

function getDisplayTicker(ticker: string) {
  const newTicker = ticker.split(".")[0];

  return newTicker;
}
