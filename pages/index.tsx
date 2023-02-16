import { Suspense } from 'react';
import { type NextPage } from 'next';

import Wrapper from '@layouts/Wrapper';
import Auth from '@components/Auth';

const Home: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Wrapper></Wrapper>
    </Suspense>
  );
};

export default Home;
