import { type NextPage } from 'next';

import Header from '@components/head/Header';
import CreatePost from '@components/posts/CreatePost';
import AllPosts from '@components/posts/AllPosts';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <CreatePost />
      <AllPosts />
    </>
  );
};

export default Home;
