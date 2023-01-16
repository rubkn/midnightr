import { Suspense } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { type NextPage } from 'next';

import Wrapper from '@layouts/Wrapper';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <Suspense fallback={null}>
      <Wrapper></Wrapper>
    </Suspense>
  );
};

export async function getStaticProps({ locale = 'en-gb' }) {
  /* const response = await fetch('/api/github');
  const work = await response.json();
  console.log(work); */

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
      /* work */
    }
  };
}

export default Home;
