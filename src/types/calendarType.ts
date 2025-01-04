import { PostTags } from '@prisma/client';

export type CalendarDay = {
  index: number;
  date: number | null;
  tags: (keyof Omit<PostTags, 'postId'>)[];
};

export type CalendarType = {
  year: string;
  month: string;
  days: CalendarDay[];
};
