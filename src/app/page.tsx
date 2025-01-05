import { PostsList } from '@/components/PostsList';
import { getUserPosts } from './actions/postActions';
import { NewPostBlock } from '@/components/NewPostBlock';

export default async function Home() {
  const posts = await getUserPosts();
  return (
    <main className='mx-auto max-w-[768px] px-5'>
      <NewPostBlock posts={posts} />
      <PostsList posts={posts} />
    </main>
  );
}
