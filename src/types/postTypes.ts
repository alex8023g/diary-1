import { Post, PostTags } from '@prisma/client';

export type PostTagsNoId = Omit<PostTags, 'postId'>;

export type PostWithTags = Post & { postTags: PostTagsNoId };
