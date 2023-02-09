import { Suspense } from 'react';
import { type NextPage } from 'next';

import Wrapper from '@layouts/Wrapper';
import { useSession } from 'next-auth/react';
import Login from '@components/Login';

const Home: NextPage = () => {
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

export default Home;
