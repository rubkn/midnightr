import { Suspense } from 'react';
import { type NextPage } from 'next';

import Wrapper from '@layouts/Wrapper';
import { useSession } from 'next-auth/react';
import Login from '@components/Login';
import Profile from '@components/Profile';

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (!session) {
    return <Login />;
  }

  return (
    <Suspense fallback={null}>
      <Wrapper></Wrapper>
      <Profile />
    </Suspense>
  );
};

export default Home;
