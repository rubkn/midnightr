import { useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { Post } from '@lib/types';
import fetcher from '@lib/fetcher';
import SinglePost from './SinglePost';
import { PAGINATION_SIZE } from '@utils/constants';
import LoaderIcon from '@components/svg/Loader';

const AllPosts = () => {
  const [page, setPage] = useState(0);

  const { data, error, size, setSize, isValidating, isLoading } =
    useSWRInfinite<Post[]>(
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
    await setSize(size + 1);
    setPage(page + 1);
  };

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const hasNoMorePosts =
    data && data[data.length - 1]?.length < PAGINATION_SIZE;

  return (
    <>
      {!posts && error ? <h1>Something went wrong...</h1> : null}

      {posts?.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}

      {hasNoMorePosts && <p>Sorry, no more posts...</p>}

      {!isValidating && posts && posts.length === 0 ? (
        <p>Sorry, no posts found.</p>
      ) : null}

      <div className="mt-4 flex items-center justify-center">
        {isLoadingMore && (
          <div className="flex items-center space-x-4 rounded-lg border-2 border-light-gray/50 bg-night px-4 py-2 text-light-gray transition-all hover:border-dark-violet">
            <LoaderIcon /> <p>Loading...</p>
          </div>
        )}
        {!isLoadingMore && !hasNoMorePosts && posts.length > 0 && (
          <button
            onClick={handleLoadingMorePosts}
            className="rounded-lg border-2 border-light-gray/50 bg-night px-4 py-2 text-light-gray transition-all hover:border-dark-violet"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default AllPosts;
