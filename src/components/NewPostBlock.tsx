'use client';
import { useState } from 'react';
import { IconEnter } from './Icons/IconEnter';
import { addPostAction } from '@/app/actions/postActions';
import { PostTagItem } from '@/components/PostTagItem';
import { DatePicker } from './DatePicker';
import { tagColors } from '@/consts/tagColors';
import { PostTagsNoId } from '@/types/postTypes';

export function NewPostBlock() {
  const [postContent, setPostContent] = useState('');
  const [postDate, setPostDate] = useState<Date | undefined>(new Date());
  const [postTags, setPostTags] = useState<PostTagsNoId>({
    red: false,
    green: false,
    blue: false,
    yellow: false,
  });

  return (
    <div className="flex gap-x-4 border-b border-gray-100 pb-1 pt-5">
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
            className="mt-1 line-clamp-2 w-full text-base text-gray-950 focus:border-none focus:outline-none"
            // ref={inputRef}
            placeholder="добавьте новый пост"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </form>

        {/* <div className="flex items-baseline justify-between gap-x-4"></div> */}
        <div className="mb-3 mt-3 flex space-x-6 sm:space-x-5">
          <DatePicker date={postDate} setDate={setPostDate} />
          {tagColors.map((color) => (
            <PostTagItem
              key={color}
              color={color}
              postTags={postTags}
              setPostTags={setPostTags}
            />
          ))}
        </div>
      </div>
      {postContent.length ||
      postTags.red ||
      postTags.green ||
      postTags.blue ||
      postTags.yellow ? (
        <button
          type="submit"
          value="Submit"
          form="post-input-form"
          className="flex"
          onClick={() => {
            // setIsPostEdit(false);
            addPostAction({ postContent, postDate, postTags });
            setPostContent('');
            setPostDate(new Date());
            setPostTags({
              red: false,
              green: false,
              blue: false,
              yellow: false,
            });
          }}
        >
          <IconEnter className="my-auto size-5" />
        </button>
      ) : null}
    </div>
  );
}
