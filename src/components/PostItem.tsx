'use client';
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

import { Pencil, Trash2, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { deletePostAction, updPostAction } from '@/app/actions/postActions';
import { IconEnter } from './ui/IconEnter';
import { Button } from './ui/button';
import { tagColors } from '@/consts/tagColors';
import { PostTagItem } from './PostTagItem';
import { PostTagsNoId, PostWithTags } from '@/types/postTypes';

type Props = {
  post: PostWithTags;
};
export function PostItem({ post }: Props) {
  const [isPostEdit, setIsPostEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [postContent, setPostContent] = useState(post.content);
  const [postTags, setPostTags] = useState<PostTagsNoId>(post.postTags!);

  function updPost() {
    updPostAction({ ...post, content: postContent, postTags });
    setIsPostEdit(false);
  }

  if (post.postTags === null) {
    return null;
  }

  const postTagsArr = Object.keys(
    post.postTags,
  ) as (keyof typeof post.postTags)[];

  return (
    <li className="flex gap-x-4 py-5">
      <div className="flex-auto">
        {isPostEdit ? (
          <form
            id="post-input-form"
            action=""
            autoFocus
            onSubmit={(e) => {
              e.preventDefault();
              updPost();
            }}
          >
            <input
              type="text"
              className="mt-1 line-clamp-2 w-full text-base text-gray-950 focus:border-none focus:outline-none"
              ref={inputRef}
              autoFocus={true}
              // defaultValue={post.content}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </form>
        ) : (
          <p className="mt-1 line-clamp-2 min-h-1 text-base text-gray-950 sm:text-sm/6">
            {postContent}
          </p>
        )}

        <div className="flex items-baseline gap-x-4">
          <p className="flex-none text-xs text-gray-600">
            <time dateTime={post.date.toISOString()}>
              {dayjs(post.date).format('DD.MM.YYYY')}
            </time>
          </p>
          {isPostEdit ? (
            tagColors.map((color) => (
              <PostTagItem
                key={color}
                color={color}
                postTags={postTags}
                setPostTags={setPostTags}
              />
            ))
          ) : (
            <ul className="flex space-x-1">
              {postTagsArr.map((color) =>
                post.postTags![color] ? (
                  <li
                    key={color}
                    className={`h-[5px] w-[5px] rounded-full bg-${color}-500`}
                  ></li>
                ) : null,
              )}
            </ul>
          )}
        </div>
      </div>

      {isPostEdit ? (
        <button
          type="submit"
          value="Submit"
          form="post-input-form"
          className="flex"
          onClick={() => {
            setIsPostEdit(false);
            updPost();
          }}
        >
          <IconEnter className="my-auto size-5" />
        </button>
      ) : (
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="border-0 ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Button variant={'ghost'} className="my-auto pr-0">
                <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="left">
              <DropdownMenuLabel>This post</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => {
                  setIsPostEdit(true);
                }}
              >
                <span className="mr-auto inline-block">Edit</span>
                <Pencil />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => {
                  deletePostAction(post.id);
                }}
              >
                <span className="mr-auto inline-block text-[#B00000]">
                  Delete
                </span>
                <Trash2 color="#B00000" />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span className="mr-auto inline-block">Cancel</span>
                <X />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </li>
  );
}
