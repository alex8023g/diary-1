import { Post } from '@prisma/client';

type Props = {
  post: Post;
};
export function PostItem({ post }: Props) {
  return (
    <li className='flex gap-x-4 py-5'>
      <div className='flex-auto'>
        <div className='flex items-baseline justify-between gap-x-4'>
          {/* <p className='text-sm/6 font-semibold text-gray-900'>{comment.name}</p> */}
          <p className='flex-none text-xs text-gray-600'>
            <time dateTime={post.createdAt.toISOString()}>
              {post.createdAt.toISOString()}
            </time>
          </p>
        </div>
        <p className='mt-1 line-clamp-2 text-sm/6 text-gray-600'>{post.content}</p>
      </div>
    </li>
  );
}
