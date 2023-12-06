import { useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import fetcher from '@lib/fetcher';
import { InfinitePaginationData } from '@lib/types';
import { PAGINATION_SIZE } from '@utils/constants';

const usePagination = <T>(url: string): InfinitePaginationData<T> => {
  const [page, setPage] = useState(0);

  const { data, error, size, setSize, isValidating } = useSWRInfinite<T>(
    (pageIndex, previousPageData) => {
      if (previousPageData && previousPageData.length === 0) {
        return null;
      }

      return `${url}?page=${pageIndex + 1}`;
    },
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true
    }
  );

  const isLoadingMore = isValidating || (page !== 0 && size > page + 1);

  const loadMore = () => {
    if (!isLoadingMore) {
      setPage((prev) => prev + 1);
      setSize(size + 1);
    }
  };

  const hasNoMorePosts =
    data && data[data.length - 1]?.length < PAGINATION_SIZE;

  return { data, error, isLoadingMore, loadMore, hasNoMorePosts };
};
