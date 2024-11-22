'use client';
import { useState } from 'react';
import { IconEnter } from './ui/IconEnter';
import { addPostAction } from '@/app/actions/postActions';
import { PostTags } from '@prisma/client';
import { PostTagItem } from '@/components/PostTagItem';

export function NewPostBlock() {
  const [postContent, setPostContent] = useState('');
  const [postTags, setPostTags] = useState<Omit<PostTags, 'id' | 'postId'>>({
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

        <div className="flex items-baseline justify-between gap-x-4">
          <p className="flex-none text-xs text-gray-600">
            {/* <time dateTime={post.createdAt.toISOString()}>
            {dayjs(post.createdAt).format('YYYY.MM.DD HH:mm')}
            </time> */}
          </p>
        </div>
        <div className="mb-3 mt-3 flex space-x-12 sm:space-x-5">
          {/* <div className="h-3 w-3 rounded-full border-2 border-white bg-red-600 outline outline-red-600"></div>
          <div className="h-3 w-3 rounded-full border-2 border-white bg-green-600 outline outline-green-600"></div>
          <div className="h-3 w-3 rounded-full border-2 border-white bg-blue-600 outline outline-blue-600"></div>
          <div className="h-3 w-3 rounded-full border-2 border-white bg-yellow-600 outline outline-yellow-600"></div> */}

          <PostTagItem
            color="red"
            postTags={postTags}
            setPostTags={setPostTags}
          />
          <PostTagItem
            color="green"
            postTags={postTags}
            setPostTags={setPostTags}
          />
          <PostTagItem
            color="blue"
            postTags={postTags}
            setPostTags={setPostTags}
          />
          <PostTagItem
            color="yellow"
            postTags={postTags}
            setPostTags={setPostTags}
          />
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
            addPostAction(postContent, postTags);
            setPostContent('');
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
