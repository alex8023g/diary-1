import { CalendarList } from '@/components/CalendarList';
import { getUserPosts } from '../actions/postActions';

export default async function CalendarPage() {
  const posts = await getUserPosts();
  return <CalendarList posts={posts} />;
}
