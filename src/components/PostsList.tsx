import { Post } from '@prisma/client';
import { PostItem } from './PostItem';

type Props = {
  posts: Post[];
};
export function PostsList({ posts }: Props) {
  return (
    <ul role='list' className='divide-y divide-gray-100 grow'>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
