import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import { PostsList } from '@/components/PostsList';
import { getUserPosts } from './actions/postActions';
import { NewPostBlock } from '@/components/NewPostBlock';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log('🚀 ~ Home ~ session:', session);
  const posts = await getUserPosts();
  return (
    <main className="mx-auto max-w-[768px] px-5">
      <NewPostBlock />
      <PostsList posts={posts} />
    </main>
  );
}
