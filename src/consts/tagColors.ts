import { PostTags } from '@prisma/client';

export const tagColors = ['red', 'green', 'blue', 'yellow'] as (keyof Omit<
  PostTags,
  'postId'
>)[];
