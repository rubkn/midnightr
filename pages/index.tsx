import { Suspense } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { type NextPage } from 'next';

import Wrapper from '@layouts/Wrapper';
import { useSession } from 'next-auth/react';
import Login from '@components/Login';

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  const { data: session } = useSession();

  if (!session) {
    return <Login />;
  }

  return (
    <Suspense fallback={null}>
      <Wrapper></Wrapper>
    </Suspense>
  );
};

export async function getStaticProps({ locale = 'en-gb' }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}

export default Home;
