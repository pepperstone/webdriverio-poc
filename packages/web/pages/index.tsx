import Head from 'next/head';
import type { NextPage } from 'next';
import { getCodeSharingMessage } from '../../../shared/helpers/CodeSharing';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Code sharing{' '}
          <a href="https://nextjs.org">
            {getCodeSharingMessage() || 'is not working'}
          </a>
        </h1>
        ;
      </main>
    </div>
  );
};

export default Home;
