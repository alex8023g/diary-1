import { Post, PostTags } from '@prisma/client';
import { PostItem } from './PostItem';

type Props = {
  posts: (Post & {
    postTags: Omit<PostTags, 'postId'> | null;
  })[];
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
