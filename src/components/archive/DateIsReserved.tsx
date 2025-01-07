'use client';

import { PostWithTags } from '@/types/postTypes';
import dayjs from 'dayjs';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

type Props = {
  posts: PostWithTags[];
  postDate: Date | undefined;
  setIsDateReserved: Dispatch<SetStateAction<boolean>>;
};
export function DateIsReserved({ posts, postDate, setIsDateReserved }: Props) {
  const postAtDate = useRef<PostWithTags | undefined>();
  useEffect(() => {
    postAtDate.current = posts.find(
      (post) =>
        dayjs(post.date).format('YYYY-MM-DD') ===
        dayjs(postDate).format('YYYY-MM-DD'),
    );
  });
  if (postAtDate.current) {
    setIsDateReserved(true);
    return (
      <p className='text-left text-orange-500'>
        на эту дату уже есть запись, внесите изменения в существующую запись
      </p>
    );
  } else {
    setIsDateReserved(false);
    return null;
  }
}
