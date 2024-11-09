import { Post } from '@prisma/client';

type Props = {
  posts: Post[];
};
export function PostsList({ posts }: Props) {
  return (
    <div>
      PostsList
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}
