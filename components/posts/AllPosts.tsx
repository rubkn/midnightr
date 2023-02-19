import useSWR from 'swr';

import { Post } from '@lib/types';
import fetcher from '@lib/fetcher';
import SinglePost from './SinglePost';

const AllPosts = () => {
  const { data: posts, error } = useSWR<Post[]>('/api/posts', fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true
  });
  console.log(posts);

  return (
    <>
      {error && <h1>Something went wrong...</h1>}

      {posts?.map((post) => (
        <SinglePost
          key={post.id}
          id={post.id}
          user={post.user}
          content={post.content}
          comments={post.comments}
          createdAt={post.createdAt}
        />
      ))}
    </>
  );
};

export default AllPosts;
