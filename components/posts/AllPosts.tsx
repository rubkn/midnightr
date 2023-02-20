import { useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { Post } from '@lib/types';
import fetcher from '@lib/fetcher';
import SinglePost from './SinglePost';
import { PAGINATION_SIZE } from '@utils/constants';

const AllPosts = () => {
  const [page, setPage] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data, error, size, setSize, isValidating } = useSWRInfinite<Post[]>(
    (pageIndex, previousPageData) => {
      if (previousPageData && previousPageData.length === 0) {
        return null;
      }

      return `/api/posts?page=${pageIndex + 1}`;
    },
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true
    }
  );

  const posts: Post[] = data ? ([] as Post[]).concat(...data) : [];

  const handleLoadingMorePosts = async () => {
    setIsLoadingMore(true);
    await setSize(size + 1);
    setPage(page + 1);
    setIsLoadingMore(false);
  };

  const hasNoMorePosts =
    data && data[data.length - 1]?.length < PAGINATION_SIZE;

  return (
    <>
      {!posts && error ? <h1>Something went wrong...</h1> : null}

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

      {hasNoMorePosts && <p>Sorry, no more posts...</p>}

      {!isValidating && posts && posts.length === 0 ? (
        <p>Sorry, no posts found.</p>
      ) : null}

      {isLoadingMore && <div>Loading more posts...</div>}
      {!isLoadingMore && !hasNoMorePosts && posts.length > 0 && (
        <button onClick={handleLoadingMorePosts}>Load More</button>
      )}
    </>
  );
};

export default AllPosts;
