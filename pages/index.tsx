import { Suspense } from 'react';
import { type NextPage } from 'next';

import Wrapper from '@layouts/Wrapper';
import Auth from '@components/Auth';

const Home: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Wrapper>
        <Auth />
      </Wrapper>
    </Suspense>
  );
};

export default Home;
