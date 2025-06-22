'use client';
import React, { useState } from 'react';
import { IconEnter } from './Icons/IconEnter';
import { addPostAction } from '@/app/actions/postActions';
import { PostTagItem } from '@/components/PostTagItem';
import { DatePicker } from './DatePicker';
import { tagColors } from '@/consts/tagColors';
import { PostTagsNoId, PostWithTags } from '@/types/postTypes';
import { CancelIcon } from './Icons/CancelIcon';
import dayjs from 'dayjs';

type Props = {
  posts: PostWithTags[];
};
export function NewPostBlock({ posts }: Props) {
  console.log('🚀 ~ NewPostBlock ~ posts:', posts);
  const [postContent, setPostContent] = useState('');
  const [postDate, setPostDate] = useState<Date | undefined>(new Date());
  const [postTags, setPostTags] = useState<PostTagsNoId>({
    red: false,
    green: false,
    blue: false,
    yellow: false,
    fuchsia: false,
  });
  const [isDateReserved, setIsDateReserved] = useState(false);

  React.useEffect(() => {
    console.log('🚀 ~ React.useEffect ~ postDate:', postDate);
    const res = posts.find(
      (post) =>
        dayjs(post.date).format('YYYY-MM-DD') ===
        dayjs(postDate).format('YYYY-MM-DD'),
    );
    if (res) {
      console.log('🚀 ~ React.useEffect ~ res:', res);
      setIsDateReserved(true);
    } else {
      setIsDateReserved(false);
    }
  }, [postDate, posts]);

  return (
    <>
      <div className='flex gap-x-4 border-b border-gray-100 pb-1 pt-5'>
        <div className='flex-auto'>
          <form
            id='post-input-form'
            action=''
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type='text'
              className='mt-1 line-clamp-2 w-full text-base text-gray-950 focus:border-none focus:outline-none'
              // ref={inputRef}
              placeholder='добавьте новый пост'
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </form>

          {/* <div className="flex items-baseline justify-between gap-x-4"></div> */}
          <div className='mb-3 mt-3 flex space-x-6 sm:space-x-5'>
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
        Object.values(postTags).some((postTag) => postTag) ? (
          isDateReserved ? (
            <button
              onClick={() => {
                setPostContent('');
                setPostTags({
                  red: false,
                  green: false,
                  blue: false,
                  yellow: false,
                  fuchsia: false,
                });
              }}
            >
              <CancelIcon />
            </button>
          ) : (
            <button
              type='submit'
              value='Submit'
              form='post-input-form'
              className='flex'
              onClick={() => {
                // setIsPostEdit(false);
                addPostAction({
                  postContent,
                  postDate: new Date(
                    dayjs(postDate)
                      .add(-postDate!.getTimezoneOffset(), 'm')
                      .format(),
                  ),
                  postTags,
                });
                setPostContent('');
                setPostDate(new Date());
                setPostTags({
                  red: false,
                  green: false,
                  blue: false,
                  yellow: false,
                  fuchsia: false,
                });
              }}
            >
              <IconEnter className='my-auto size-5' />
            </button>
          )
        ) : null}
      </div>
      {(Boolean(postContent.length) ||
        Object.values(postTags).some((postTag) => postTag)) &&
        isDateReserved && (
          <p className='text-justify text-orange-600'>
            На эту дату уже есть запись. Внесите изменения в существующую запись
            или измените дату.
          </p>
        )}
    </>
  );
}
