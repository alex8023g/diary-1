import { getUserPosts } from '../actions/postActions';
import { Test1Client } from './Test1Client';

export default async function Test1Page() {
  const posts = await getUserPosts();
  return <Test1Client posts={posts} />;
}
