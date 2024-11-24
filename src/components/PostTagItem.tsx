'use client';
import { PostTagsNoId } from '@/types/postTypes';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  color: keyof PostTagsNoId;
  postTags: PostTagsNoId;
  setPostTags: Dispatch<SetStateAction<PostTagsNoId>>;
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
        className={`h-3 w-3 rounded-full border border-white ring-2 ring-${color}-500 ${postTags[color] ? `bg-${color}-500` : ''}`}
      ></div>
    </button>
  );
}
