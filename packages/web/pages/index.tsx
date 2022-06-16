import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function home({ heading }: { heading: string }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>{heading}</h1>
        <hr />

        <h2>Pages</h2>
        <ul>
          <li>
            <Link href="/trendingInst">
              <a>Trending Instruments</a>
            </Link>
          </li>
        </ul>

        <h2>API</h2>
        <ul>
          <li>
            <Link href="/api/instruments/trending?categories=All">
              <a>Trending Instruments - All</a>
            </Link>
          </li>
          <li>
            <Link href="/api/instruments/trending?categories=FX,Commodity">
              <a>Trending Instruments - FX, Commodity</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { heading: `Pepperstone` },
  };
};
