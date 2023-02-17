import { type NextPage } from 'next';

import Wrapper from '@layouts/Wrapper';
import Header from '@components/head/Header';
import CreatePost from '@components/posts/CreatePost';
import AllPosts from '@components/posts/AllPosts';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Header />
      <CreatePost />
      <AllPosts />
    </Wrapper>
  );
};

export default Home;
