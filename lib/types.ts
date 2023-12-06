export type Links = {
  href: string;
  label: string;
};

export type Post = {
  id: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  user: {
    email: string;
    id: string;
    image: string;
    name: string;
  };
  comments: {
    createdAt?: string;
    id: string;
    postId: string;
    content: string;
    userId: string;
    user: {
      email: string;
      id: string;
      image: string;
      name: string;
    };
  }[];
};

export type AllPosts = {
  content: string;
  id: string;
  createdAt?: string;
  comments?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
  }[];
  user: {
    name: string;
    image: string;
  };
};

export type AuthPosts = {
  email: string;
  id: string;
  image: string;
  name: string;
  posts: {
    createdAt: string;
    id: string;
    content: string;
    comments?: {
      createdAt: string;
      id: string;
      postId: string;
      content: string;
      userId: string;
    }[];
  }[];
};

export type InfinitePaginationData<T> = {
  data?: T[];
  error?: any;
  isLoadingMore: boolean;
  loadMore: () => void;
  hasNoMorePosts?: boolean;
};

export type PaginatedData<T> = {
  data: T[];
};
