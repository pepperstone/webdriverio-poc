import type { NextApiRequest, NextApiResponse } from "next";

const api_url =
  "https://morgdenn.github.io/nextjs-blog/trending-instruments-full.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      GET_handler(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function GET_handler(req: NextApiRequest, res: NextApiResponse) {
  // Set the default category search to "all".
  const asset_classes: string = (req.query.category as string) || "all";

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
  const trendingData_res = await fetch(api_url + "?" + searchParams.toString());

  // Is it ok?
  if (!trendingData_res.ok) {
    res.status(500).json({ error: trendingData_res.status });
    return;
  }

  const trendingData_json = await trendingData_res.json();

  // Just return the instruments names.
  res.status(200).json({ instruments: trendingData_json.top_instruments });
}
