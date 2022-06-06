import Layout, { siteTitle } from '../components/layout';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getCodeSharingMessage } from '@monorepo/shared/helpers/CodeSharing';
import styles from '../styles/Home.module.css';

export default function home({ heading }: { heading: string }) {
  const isWorking = getCodeSharingMessage();

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
      <main className={styles.main}>
        <h1 className={styles.title}>
          Shared code <a href="https://nextjs.org">{isWorking}</a>
        </h1>
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { heading: `Pepperstone` },
  };
};
