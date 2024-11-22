'use client';

import { PostTags } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  // color: 'red' | 'green' | 'blue' | 'yellow';
  color: keyof Omit<PostTags, 'id' | 'postId'>;
  postTags: Omit<PostTags, 'id' | 'postId'>;
  setPostTags: Dispatch<SetStateAction<Omit<PostTags, 'id' | 'postId'>>>;
};

export function PostTagItem({ color, postTags, setPostTags }: Props) {
  return (
    <button
      className="p-2"
      onClick={() => {
        setPostTags({ ...postTags, [color]: !postTags[color] });
      }}
    >
      <div
        className={`h-3 w-3 rounded-full border border-white outline outline-${color}-500 ${postTags[color] ? `bg-${color}-500` : ''}`}
      ></div>
    </button>
  );
}
