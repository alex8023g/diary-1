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
    <main className=''>
      <PostsList posts={posts} />
      <AddPostDialog />
    </main>
  );
}
