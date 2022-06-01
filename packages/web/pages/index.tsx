import Layout, { siteTitle } from '../components/layout';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

export default function home({ heading }: { heading: string }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>{heading}</h2>

        <p>
          <Link href="/api/instruments/trending">
            <a>Trending Instruments</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { heading: `Pepperstone` },
  };
};
