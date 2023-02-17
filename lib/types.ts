export type Links = {
  href: string;
  label: string;
};

export type Post = {
  id: string;
  content: string;
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
