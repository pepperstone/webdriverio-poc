import type { NextApiRequest, NextApiResponse } from "next";

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
  /* FAKE DATA */
  const fake_data = {
    instruments: [
      {
        symbol: "JPN225",
        ticker: "JPN225",
        description: "Japan 225 Index",
        display_ticker: "JPN225",
      },
      {
        symbol: "JPYX",
        ticker: "JPYX",
        description: "JPY Currency Index",
        display_ticker: "JPYX",
      },
      {
        symbol: "USDMXN",
        ticker: "USD/MXN",
        description: "US Dollar vs Mexican Peso",
        display_ticker: "USD/MXN",
      },
      {
        symbol: "NZDCAD",
        ticker: "NZD/CAD",
        description: "New Zealand Dollar vs Canadian Dollar",
        display_ticker: "NZD/CAD",
      },
      {
        symbol: "NZDUSD",
        ticker: "NZD/USD",
        description: "New Zealand Dollar vs US Dollar",
        display_ticker: "NZD/USD",
      },
      {
        symbol: "CHFJPY",
        ticker: "CHF/JPY",
        description: "Swiss Franc vs Japanese Yen",
        display_ticker: "CHF/JPY",
      },
      {
        symbol: "GBPNZD",
        ticker: "GBP/NZD",
        description: "Great Britain Pound vs New Zealand Dollar",
        display_ticker: "GBP/NZD",
      },
      {
        symbol: "EURJPY",
        ticker: "EUR/JPY",
        description: "Euro vs Japanese Yen",
        display_ticker: "EUR/JPY",
      },
      {
        symbol: "VIX",
        ticker: "VIX",
        description: "Volatility Index",
        display_ticker: "VIX",
      },
      {
        symbol: "XAGUSD",
        ticker: "XAG/USD",
        description: "Silver vs US Dollar",
        display_ticker: "XAG/USD",
      },
      {
        symbol: "GER40",
        ticker: "GER40",
        description: "Germany DAX 40 Index",
        display_ticker: "GER40",
      },
      {
        symbol: "NZDJPY",
        ticker: "NZD/JPY",
        description: "New Zealand Dollar vs Japanese Yen",
        display_ticker: "NZD/JPY",
      },
      {
        symbol: "CADJPY",
        ticker: "CAD/JPY",
        description: "Canadian Dollar vs Japanese Yen",
        display_ticker: "CAD/JPY",
      },
      {
        symbol: "Apple_Inc_(AAPL.O)",
        ticker: "AAPL.O",
        description: "Apple Inc",
        display_ticker: "AAPL",
      },
      {
        symbol: "Wheat",
        ticker: "Wheat",
        description: "Wheat Cash Contract",
        display_ticker: "Wheat",
      },
    ],
  };

  res
    .status(200)
    .json({ instruments: randomizeFakeData(fake_data.instruments) });
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
