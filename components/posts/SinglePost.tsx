import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@lib/types';

const SinglePost = ({ id, user, content, comments, createdAt }: Post) => {
  return (
    <Link href={{ pathname: `/post/${id}` }}>
      <div className="my-8 rounded-lg bg-dark-gray p-8 py-8 transition-all hover:bg-dark-gray/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              className="rounded-full"
              width={32}
              height={32}
              src={user.image}
              alt="Avatar"
            />
            <h3 className="text-gray-700 font-bold capitalize">{user.name}</h3>
          </div>
          <span className="text-[10px]">
            {new Date(createdAt!).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            })}
          </span>
        </div>
        <div className="mt-4 mb-6">{content}</div>
        <div className="flex cursor-pointer items-center">
          <p className="text-gray-700 text-sm font-bold">
            {comments?.length} comments
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SinglePost;
