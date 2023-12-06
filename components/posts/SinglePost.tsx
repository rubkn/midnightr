import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@lib/types';

const SinglePost = ({ post }: { post?: Post }): JSX.Element => {
  if (!post) return <></>;

  return (
    <Link href={{ pathname: `/post/${post.id}` }}>
      <div className="my-8 rounded-lg bg-dark-gray p-8 transition-all hover:bg-dark-gray/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              className="rounded-full"
              width={32}
              height={32}
              src={post.user?.image}
              alt="Avatar"
            />
            <h3 className="text-gray-700 font-bold capitalize">
              {post.user?.name}
            </h3>
          </div>
          <span className="text-[10px] text-light-gray/25">
            {new Date(post.createdAt!).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            })}
          </span>
        </div>
        <div className="py-6">{post.content}</div>
        <div className="flex cursor-pointer items-center">
          <p className="text-xs font-medium text-light-gray/50">
            {post.comments?.length > 0
              ? `${post.comments?.length} comments`
              : 'No comments so far... Be the first to comment!'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SinglePost;
