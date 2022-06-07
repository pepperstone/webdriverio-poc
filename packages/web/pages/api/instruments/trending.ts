import type { NextApiRequest, NextApiResponse } from "next";

type Instrument = {
  trendingSymbol_DEL: string;
  ticker: string;
  description: string;
  volume_change_pct: string;
  yesterday_closing_price: string;
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

  // Get all the Symbols meta data.
  const symbolInfo = await getSymbolInfo();

  // Get the Trending instruments.
  const trendingInstruments = await getTrendingInstruments(asset_classes);

  // TEMP var for testing.
  const missingSymbols: string[] = [];

  const instruments = trendingInstruments.top_instruments
    .map((trendingSymbol: string, index: number) => {
      // Find the real ticker symbol.
      let symbol_index = symbolInfo.symbol.findIndex(
        (symbol: string) => symbol === trendingSymbol
      );

      if (symbol_index === -1) {
        // Sometimes the symbol has a .(a-z) on the end.  eg. GBPAUD.r
        symbol_index = symbolInfo.symbol.findIndex((symbol: string) => {
          return symbol === trendingSymbol.split(".")[0];
        });
      }

      if (symbol_index === -1) {
        // Sometimes the symbol has a _(a-z) on the end.  eg. EURJPY_SB
        symbol_index = symbolInfo.symbol.findIndex((symbol: string) => {
          return symbol === trendingSymbol.split("_")[0];
        });
      }

      return {
        trendingSymbol_DEL: trendingSymbol,
        ticker: symbolInfo.ticker[symbol_index],
        name: symbolInfo.description[symbol_index],
        volume_change_pct: trendingInstruments.top_instruments_values[index],
      };
    })
    // Remove any instruments with out a ticker match.
    .filter((instrument: Instrument) => {
      if (instrument.ticker !== undefined) {
        return true;
      } else {
        missingSymbols.push(instrument.trendingSymbol_DEL);
        return false;
      }
    })
    .map(async (instrument: Instrument) => {
      // Get the symbols history
      const symbolHistory = await getSymbolHistory(instrument.ticker);

      if (symbolHistory.s === "no_data") {
        instrument.yesterday_closing_price = "no_data";
      }

      if (symbolHistory.s === "ok" && symbolHistory.c.length >= 1) {
        instrument.yesterday_closing_price = symbolHistory.c[0];
      }

      return instrument;
    });

  const returnInstruments: Instrument[] = await Promise.all(instruments);

  return res
    .status(200)
    .json({ instruments: returnInstruments, missingSymbols: missingSymbols });
}

async function getTrendingInstruments(asset_classes: string) {
  const API_URL =
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

  // Get the Treding Instruments data.
  const trendingData_res = await fetch(API_URL + "?" + searchParams.toString());

  // Is it ok?
  if (!trendingData_res.ok) {
    console.log(trendingData_res);
    throw Error(trendingData_res.statusText);
  }

  return await trendingData_res.json();
}

async function getSymbolInfo() {
  const API_URL =
    "https://ctrader-tradingview-api.pepperstone.com/api/symbol_info";

  const symbolInfo_res = await fetch(API_URL);

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

  return symbolInfo_json;
}

async function getSymbolHistory(symbol: string) {
  const API_URL =
    "https://ctrader-tradingview-api-staging.pepperstone.com/api/history";

  const today = new Date();
  today.setMilliseconds(0);
  today.setSeconds(0);
  today.setMinutes(0);
  today.setHours(0);

  var from_to = Math.round(today.getTime() / 1000).toString();

  // Setup the search parameters.
  const paramsObj = {
    from: from_to,
    to: from_to,
    resolution: "D",
    symbol: symbol,
  };
  const searchParams = new URLSearchParams(paramsObj);

  const symbolHist_res = await fetch(API_URL + "?" + searchParams.toString());

  // Is it ok?
  if (!symbolHist_res.ok) {
    console.log(symbolHist_res);
    throw Error(symbolHist_res.statusText);
  }

  const symbolHist_json = await symbolHist_res.json();

  if (symbolHist_json.s === "error") {
    console.log(symbolHist_json);
    throw Error(symbolHist_json.errmsg);
  }

  return symbolHist_json;
}
