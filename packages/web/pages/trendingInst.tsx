import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { useState } from "react";
import useTrendingInstrBids from "../hooks/useTrendingInstrBids";

export default function TrendingInst({ heading }: { heading: string }) {
  const [categories, setCategories] = useState(["All"]);

  const updateCategories = (category: string) => {
    setCategories([category]);
  };

  const addCategories = (category: string) => {
    const newCategories = [...categories, category];
    const filteredCategories = newCategories
      .filter((c, i) => newCategories.indexOf(c) === i)
      .filter((c) => c !== "All")
      .sort();

    setCategories(filteredCategories);
  };

  // ----------------------------

  const trendingInstrBids = useTrendingInstrBids(categories);

  return (
    <Layout>
      <Head>
        <title>{heading}</title>
      </Head>
      <section>
        <h1>{heading}</h1>

        <hr />

        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => updateCategories("All")}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addCategories("FX")}
          >
            FX
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addCategories("Commodity")}
          >
            Commodity
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addCategories("Equity")}
          >
            Equity
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addCategories("EquityIndex")}
          >
            EquityIndex
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addCategories("Futures")}
          >
            Futures
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addCategories("CryptoCurrency")}
          >
            CryptoCurrency
          </button>
        </div>

        <h2>{categories.join(", ")}</h2>

        <hr />

        <div className="table-responsive">
          <table className="table table-striped  table-sm">
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Symbol</th>
                <th>Description</th>
                <th>display_ticker</th>
                <th>Vol. Change</th>
                <th>Bid</th>
                <th>History</th>
              </tr>
            </thead>
            <tbody>
              {trendingInstrBids.map((instr) => {
                let bidColor = "black";

                if (instr.bid) {
                  if (instr.bid > instr.history[1]) {
                    bidColor = "lime";
                  }

                  if (instr.bid < instr.history[1]) {
                    bidColor = "red";
                  }
                }

                return (
                  <tr key={instr.symbol + instr.ticker}>
                    <td>{instr.ticker}</td>
                    <td>{instr.symbol}</td>
                    <td>{instr.description}</td>
                    <td>{instr.display_ticker}</td>
                    <td>{instr.volume_change}</td>
                    <td style={{ color: bidColor }}>{instr.bid}</td>

                    {instr.history.map((bid, index) => {
                      let color = "black";
                      if (bid > instr.history[index + 1]) {
                        color = "lime";
                      }
                      if (bid < instr.history[index + 1]) {
                        color = "red";
                      }
                      return (
                        <td key={bid + instr.symbol + instr.ticker + index}>
                          <small style={{ color: color }}>{bid}</small>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { heading: `Trending Instruments` },
  };
};
