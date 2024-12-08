import { PostTags } from '@prisma/client';

export const tagColors = [
  'red',
  'green',
  'blue',
  'yellow',
  'fuchsia',
] as (keyof Omit<PostTags, 'postId'>)[];
