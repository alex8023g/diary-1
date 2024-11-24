import { PostItem } from './PostItem';
import { PostWithTags } from '@/types/postTypes';

type Props = {
  posts: PostWithTags[];
};
export function PostsList({ posts }: Props) {
  return (
    <ul role="list" className="grow divide-y divide-gray-100">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
