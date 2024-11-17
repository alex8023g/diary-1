'use server';
import { getServerSession } from 'next-auth';
import { prisma } from '../../../prisma/prisma';
import { revalidatePath } from 'next/cache';
import { Post } from '@prisma/client';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';

export async function addPostAction(postContent: string) {
  const session = await getServerSession(authOptions);

  const demoUser = await prisma.user.findUnique({
    where: { email: 'demouser@nomaildomain.com' },
  });

  await prisma.post.create({
    data: {
      authorId: session?.user.id || demoUser?.id || '',
      content: postContent,
    },
  });
  revalidatePath('/');
}

export async function updPostAction(post: Post) {
  const session = await getServerSession(authOptions);
  const demoUser = await prisma.user.findUnique({
    where: { email: 'demouser@nomaildomain.com' },
  });

  await prisma.post.update({
    where: {
      id: post.id,
      authorId: session?.user.id || demoUser?.id || '',
    },
    data: {
      content: post.content,
    },
  });
}

export async function getUserPosts() {
  const session = await getServerSession(authOptions);

  const demoUser = await prisma.user.findUnique({
    where: { email: 'demouser@nomaildomain.com' },
  });

  const res = await prisma.post.findMany({
    where: { authorId: session?.user.id || demoUser?.id || '' },
    orderBy: { createdAt: 'desc' },
  });
  return res;
}
