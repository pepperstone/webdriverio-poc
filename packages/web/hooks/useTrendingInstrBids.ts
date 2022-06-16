import { useEffect, useState } from "react";
import useTrendingInstr from "./useTrendingInstr";
import useLivePriceing from "./useLivePriceing";

type InstrumentBid = {
  symbol: string;
  ticker: string;
  description: string;
  bid: string | null;
};

const useTrendingInstrBids = (categories: string[]) => {
  // Convert categories to a list
  const categoriesStr = categories.sort().join();

  // Get the Trending Instruments
  const trendingInstr = useTrendingInstr(categoriesStr);

  // Convert the Tickers to a list
  const tickers = trendingInstr.data.map((instr) => instr.ticker).join();

  // Get the Live Prices
  const livePrices = useLivePriceing(tickers, 500);

  // Add the Bid to the Instrument
  const trendingInstrBids: InstrumentBid[] = trendingInstr.data.map((instr) => {
    let newBidPrice = null;
    if (livePrices.data[instr.ticker] !== undefined) {
      newBidPrice = livePrices.data[instr.ticker].bid;
    }

    return { ...instr, bid: newBidPrice };
  });

  return trendingInstrBids;
};

export default useTrendingInstrBids;
