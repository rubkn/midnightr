import Header from '@components/Header';
import Head from 'next/head';
import { type ReactNode } from 'react';

const Wrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Chamber: Midnight Thoughts</title>
        <meta property="og:title" content="chamber" key="title" />
        <meta
          name="description"
          content="Open up about your after midnight thoughts!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Wrapper;
