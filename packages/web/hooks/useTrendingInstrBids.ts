import { useEffect, useState } from "react";
import useTrendingInstr from "./useTrendingInstr";
import useLivePriceing from "./useLivePriceing";

type InstrumentBid = {
  symbol: string;
  ticker: string;
  description: string;
  display_ticker: string;
  volume_change: number;
  bid: string | null;
  history: string[];
};

const LIVE_PRICE_INTERVAL = 500;

const useTrendingInstrBids = (categories: string[]) => {
  // Convert categories to a list
  const categoriesStr = categories.sort().join();

  // Get the Trending Instruments
  const trendingInstr = useTrendingInstr(categoriesStr);

  // Convert the Symbols to a list
  const symbolList = trendingInstr.data.map((instr) => instr.symbol).join();

  // Get the Live Prices
  const livePrices = useLivePriceing(symbolList, LIVE_PRICE_INTERVAL);

  // Add the Bid & History to the Instrument
  const trendingInstrBids: InstrumentBid[] = trendingInstr.data.map((instr) => {
    const history = livePrices.history.map((value) => {
      return value[instr.symbol]?.bid;
    });

    return {
      ...instr,
      bid: livePrices.data[instr.symbol]?.bid,
      history: history,
    };
  });
  return trendingInstrBids;
};

export default useTrendingInstrBids;
