import { Post } from '@lib/types';
import { type FC, useState, type FormEvent, useRef } from 'react';
import { mutate } from 'swr';

const AddPost: FC = () => {
  const [content, setContent] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const ref = useRef<HTMLFormElement>(null);

  const submitPost = async (e: FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);

    const response = await fetch('/api/posts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content, published: true })
    });

    const post = await response.json();
    mutate('/api/posts', (cached = []) => [[post], ...cached], true);
    resetForm();
  };

  const resetForm = () => {
    setContent('');
    setIsDisabled(false);

    if (ref.current) {
      ref.current.reset();
    }
  };

  return (
    <form
      ref={ref}
      onSubmit={submitPost}
      className="mt-8 rounded-lg bg-dark-gray p-2"
    >
      <div className="flex flex-col space-y-4 p-4">
        <textarea
          name="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="focus:border-transparent w-full rounded-md border border-black bg-night p-4 text-lg focus:outline-none focus:ring focus:ring-dark-violet"
        />
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-bold ${
              content?.length > 300 ? 'text-red' : 'text-light-gray'
            }'}}`}
          >{`${content?.length}/300`}</span>
          <button
            type="submit"
            disabled={isDisabled}
            className="rounded-lg bg-violet py-2 px-4 text-sm font-bold transition-all hover:bg-dark-violet"
          >
            Add Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddPost;
