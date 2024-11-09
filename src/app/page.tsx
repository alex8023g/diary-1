import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { AddPostDialog } from '@/components/AddPostDialog';
import { PostsList } from '@/components/PostsList';
import { getUserPosts } from './actions/postActions';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log('🚀 ~ Home ~ session:', session);
  const posts = await getUserPosts();
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <PostsList posts={posts} />
        <AddPostDialog />
      </main>
    </div>
  );
}
