'use client';

import { useState } from 'react';
import { IconEnter } from './ui/IconEnter';
import { addPostAction } from '@/app/actions/postActions';

export function NewPostBlock() {
  const [postContent, setPostContent] = useState('');

  return (
    <div className="flex gap-x-4 border-b border-gray-100 py-5">
      <div className="flex-auto">
        <form
          id="post-input-form"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="mt-1 line-clamp-2 w-full text-sm/6 text-gray-950 focus:border-none focus:outline-none"
            // ref={inputRef}
            placeholder="добавьте новый пост"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </form>

        <div className="flex items-baseline justify-between gap-x-4">
          <p className="flex-none text-xs text-gray-600">
            {/* <time dateTime={post.createdAt.toISOString()}>
            {dayjs(post.createdAt).format('YYYY.MM.DD HH:mm')}
            </time> */}
          </p>
        </div>
      </div>
      {postContent.length ? (
        <button
          type="submit"
          value="Submit"
          form="post-input-form"
          className="flex"
          onClick={() => {
            // setIsPostEdit(false);
            addPostAction(postContent);
            setPostContent('');
          }}
        >
          <IconEnter className="my-auto size-5" />
        </button>
      ) : null}
    </div>
  );
}
