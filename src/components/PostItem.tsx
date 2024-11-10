'use client';
import { Post } from '@prisma/client';
import dayjs from 'dayjs';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Pencil, Trash2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { updPostAction } from '@/app/actions/postActions';
import { IconEnter } from './ui/IconEnter';
import { Button } from './ui/button';

type Props = {
  post: Post;
};
export function PostItem({ post }: Props) {
  const [isPostEdit, setIsPostEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [postContent, setPostContent] = useState(post.content);

  function updPost() {
    updPostAction({ ...post, content: postContent });
    setIsPostEdit(false);
  }

  return (
    <li className='flex gap-x-4 py-5'>
      <div className='flex-auto'>
        {isPostEdit ? (
          <form
            id='post-input-form'
            action=''
            onSubmit={(e) => {
              e.preventDefault();
              updPost();
            }}
          >
            <input
              type='text'
              className='w-full mt-1 line-clamp-2 text-sm/6 text-gray-950 focus:border-none focus:outline-none'
              ref={inputRef}
              // defaultValue={post.content}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </form>
        ) : (
          <p className='mt-1 line-clamp-2 text-sm/6 text-gray-950'>{postContent}</p>
        )}

        <div className='flex items-baseline justify-between gap-x-4'>
          {/* <p className='text-sm/6 font-semibold text-gray-900'>{comment.name}</p> */}
          <p className='flex-none text-xs text-gray-600'>
            <time dateTime={post.createdAt.toISOString()}>
              {dayjs(post.createdAt).format('YYYY.MM.DD HH:mm')}
            </time>
          </p>
        </div>
      </div>

      {isPostEdit ? (
        <button
          type='submit'
          value='Submit'
          form='post-input-form'
          className='flex'
          onClick={() => {
            setIsPostEdit(false);
            updPost();
          }}
        >
          <IconEnter className='size-5 my-auto' />
        </button>
      ) : (
        <div className='flex'>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className='focus:outline-none ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'
            >
              <Button variant={'ghost'} className='my-auto'>
                <EllipsisVerticalIcon aria-hidden='true' className='h-5 w-5 ' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' side='left'>
              <DropdownMenuLabel>This post</DropdownMenuLabel>

              <DropdownMenuSeparator />
              <div className='flex justify-between p-2'>
                <div className='h-4 w-4 border-2 border-white bg-red-700 rounded-full outline-red-700 outline'></div>
                <div className='h-4 w-4 border-2 border-white bg-green-600 rounded-full outline-green-600 outline'></div>
                <div className='h-4 w-4 border-2 border-white bg-blue-600 rounded-full outline-blue-600 outline'></div>
                <div className='h-4 w-4 border-2 border-white bg-yellow-500 rounded-full outline-yellow-500 outline'></div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => {
                  setIsPostEdit(true);
                  setTimeout(() => {
                    inputRef.current?.focus();
                  }, 10);
                }}
              >
                <span className='inline-block mr-auto'>Edit</span>
                <Pencil />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span className='inline-block mr-auto text-[#B00000]'>Delete</span>
                <Trash2 color='#B00000' />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </li>
  );
}
