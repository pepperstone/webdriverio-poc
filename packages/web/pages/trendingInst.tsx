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
    const newCategories = [...categories, category]
      .filter((c) => c !== "All")
      .sort();
    setCategories(newCategories);
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

        <div className="d-flex flex-wrap">
          {trendingInstrBids.map((instr) => {
            return (
              <div
                className="card"
                key={instr.ticker}
                style={{ width: "10rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{instr.ticker}</h5>
                  <h6 className="card-subtitle mb-2 text-muted text-truncate">
                    {instr.description}
                  </h6>
                  <p className="card-text">{instr.bid}</p>
                </div>
              </div>
            );
          })}
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
