import type { NextApiRequest, NextApiResponse } from "next";
import cacheData from "memory-cache";

/* FAKE DATA */
const fake_data = {
  asset_classes: ["All"],
  rank_by: "volume_change",
  period: "from_market_open",
  level: "symbol",
  num_instruments: 14,
  version: "1.0.0",
  uid: "1a26f870-ce8a-46ac-8637-d8ad698e33fa",
  timestamp: "2022-06-09T04:42:20",
  top_instruments_symbols: [
    "US2000.a",
    "USDCAD_SB",
    "XAUGBP",
    "LINKUSD",
    "US30_SB",
    "CADCHF.a",
    "USDCAD",
    "GBPCHF.r",
    "EURCAD.r",
    "EURJPY",
    "AUDNZD.p",
    "EURCAD.a",
    "SpotCrude",
    "GBPJPY.r",
  ],
  top_instruments_tickers: [
    "US2000",
    "USDCAD",
    "XAUGBP",
    "LINKUSD",
    "US30",
    "CADCHF",
    "USDCAD",
    "GBPCHF",
    "EURCAD",
    "EURJPY",
    "AUDNZD",
    "EURCAD",
    "SpotCrude",
    "GBPJPY",
  ],
  top_instruments_values: [
    4357.1054, 613.8333, 593.586, 498.5863, 454.5162, 399.4866, 397.6424,
    366.9019, 311.9639, 309.3079, 293.5196, 286.5202, 278.3744, 270.9389,
  ],
  top_instruments_scores: [
    0.46, 0.07, 0.06, 0.05, 0.05, 0.04, 0.04, 0.04, 0.03, 0.03, 0.03, 0.03,
    0.03, 0.03,
  ],
};

type Instrument = {
  symbol: string;
  ticker: string;
  description: string;
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
  const categories: string = (req.query.categories as string) || "All";

  // The Trending Instruments API requiers a '+' delimited list.
  const asset_classes = categories.split(",").join("+");

  // Get the Trending instruments.
  const trendingInstruments = await getTrendingInstruments(asset_classes);

  const instruments = trendingInstruments.top_instruments_symbols.map(
    async (trendingSymbol: string, index: number) => {
      const ticker = trendingInstruments.top_instruments_tickers[index];

      // Get the Symbols meta data.
      const symbolInfo = await getSymbolInfo(ticker);

      console.log(
        index,
        trendingSymbol,
        trendingInstruments.top_instruments_tickers[index],
        symbolInfo
      );

      return {
        symbol: trendingSymbol,
        ticker: ticker,
        description: symbolInfo[ticker].Description,
      };
    }
  );

  const returnInstruments: Instrument[] = await Promise.all(instruments);

  // Cache the response for 10 sec.
  res.setHeader("Cache-Control", "max-age=10, stale-while-revalidate=10");

  res.status(200).json({ instruments: randomizeFakeData(returnInstruments) });
}

async function getTrendingInstruments(asset_classes: string) {
  return fake_data;

  const API_URI =
    "https://trending-instruments.dev.ai.pepperstone.com/trending";

  // Setup the search parameters.
  const paramsObj = {
    rank_by: "volume_change",
    asset_classes: asset_classes,
    period: "from_market_open",
    level: "symbol",
    num_instruments: "14",
  };
  const searchParams = new URLSearchParams(paramsObj);

  console.log(API_URI + "?" + searchParams.toString());

  // Get the Treding Instruments data.
  const trendingData_res = await fetch(API_URI + "?" + searchParams.toString());

  // Is it ok?
  if (!trendingData_res.ok) {
    console.log(trendingData_res);
    throw Error(trendingData_res.statusText);
  }

  return await trendingData_res.json();
}

async function getSymbolInfo(symbol: string) {
  const API_URI = "https://live-pricing.pepperstone.com/symbols";
  const CACHE_TIME = 60 * 1000; // 1 minute.

  const api_url = API_URI + "?names=" + symbol;

  // Chech the cache first.
  const cacheValue = cacheData.get(api_url);
  if (cacheValue) {
    return cacheValue;
  }

  // Get the data.
  const symbolInfo_res = await fetch(api_url);

  // Is it ok?
  if (!symbolInfo_res.ok) {
    console.log(symbolInfo_res);
    throw Error(symbolInfo_res.statusText);
  }

  const symbolInfo_json = await symbolInfo_res.json();

  if (symbolInfo_json.s === "error") {
    console.log(symbolInfo_json);
    throw Error(symbolInfo_json.errmsg);
  }

  // Cache the results.
  cacheData.put(api_url, symbolInfo_json, CACHE_TIME);

  return symbolInfo_json;
}

function randomizeFakeData(fake_data: Instrument[]) {
  // between 0 and 14
  const randomLength = Math.floor(Math.random() * 15);

  // Randomize the fake data.
  const randomData = fake_data
    .sort(() => Math.random() - 0.5)
    .slice(0, randomLength);

  return randomData;
}
