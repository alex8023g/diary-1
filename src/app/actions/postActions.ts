'use server';

import { getServerSession } from 'next-auth';
import { prisma } from '../../../prisma/prisma';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { revalidatePath } from 'next/cache';

export async function addPostAction(post: string) {
  const session = await getServerSession(authOptions);

  const demoUser = await prisma.user.findUnique({
    where: { email: 'demouser@nomaildomain.com' },
  });

  const res = await prisma.post.create({
    data: {
      authorId: session?.user.id || demoUser?.id || '',
      content: post,
    },
  });
  console.log('🚀 ~ addPostAction ~ res:', res);
  revalidatePath('/');
}

export async function getUserPosts() {
  const session = await getServerSession(authOptions);
  const demoUser = await prisma.user.findUnique({
    where: { email: 'demouser@nomaildomain.com' },
  });

  const res = await prisma.post.findMany({
    where: { authorId: session?.user.id || demoUser?.id },
  });
  return res;
}
