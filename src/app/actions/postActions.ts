'use server';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { prisma } from '../../../prisma/prismaClient/prismaClient';
import { PostTagsNoId, PostWithTags } from '@/types/postTypes';

type AddPostActionArgs = {
  postContent: string;
  postDate: Date | undefined;
  postTags: PostTagsNoId;
};

export async function addPostAction({
  postContent,
  postDate,
  postTags,
}: AddPostActionArgs) {
  const session = await getServerSession(authOptions);

  const demoUser = await prisma.user.findUnique({
    where: { email: 'demouser@nomaildomain.com' },
  });

  await prisma.post.create({
    data: {
      authorId: session?.user.id || demoUser?.id || '',
      content: postContent,
      date: postDate,
      postTags: {
        create: postTags,
      },
    },
  });
  revalidatePath('/');
}

export async function updPostAction(post: PostWithTags) {
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
      postTags: {
        update: {
          data: post.postTags,
        },
      },
    },
  });
  revalidatePath('/');
}

export async function deletePostAction(id: string) {
  const session = await getServerSession(authOptions);

  await prisma.post.update({
    where: { id, authorId: session?.user.id },
    data: {
      postTags: { delete: true },
    },
    include: {
      postTags: true,
    },
  });
  await prisma.post.delete({
    where: { id, authorId: session?.user.id },
  });
  revalidatePath('/');
}

export async function getUserPosts() {
  const session = await getServerSession(authOptions);

  const demoUser = await prisma.user.findUnique({
    where: { email: 'demouser@nomaildomain.com' },
  });

  const res = await prisma.post.findMany({
    where: { authorId: session?.user.id || demoUser?.id || '' },
    include: {
      postTags: {
        select: {
          red: true,
          green: true,
          blue: true,
          yellow: true,
        },
      },
    },
    orderBy: { date: 'desc' },
  });
  return res;
}
