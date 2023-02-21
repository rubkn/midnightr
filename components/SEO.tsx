import Head from 'next/head';

type Metadata = {
  title: string;
  description: string;
  image?: string;
  type?: string;
};

const SEO = ({ metadata }: { metadata?: Metadata }) => {
  return (
    <>
      <Head>
        <title>{metadata?.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={metadata?.description} name="description" />
        <meta property="og:type" content={metadata?.type} />
        <meta property="og:site_name" content="Chamber" />
        <meta property="og:description" content={metadata?.description} />
        <meta property="og:title" content={metadata?.title} />
        <meta property="og:image" content={metadata?.image} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export default SEO;
