'use server';
import { getUserPosts } from '@/app/actions/postActions';
import { tagColors } from '@/consts/tagColors';
import { CalendarDay, CalendarType } from '@/types/calendarType';
import { PostWithTags } from '@/types/postTypes';
import { PostTags } from '@prisma/client';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import weekday from 'dayjs/plugin/weekday';
dayjs.locale('ru');
dayjs.extend(weekday);

export async function createCalendarList() {
  const posts = await getUserPosts();

  let monthIndex = dayjs().month();
  const calendarList: CalendarType[] = [];

  while (true) {
    let isFirstDayInDaysMatrix = false;
    let day = 0;
    const daysMatrix: CalendarDay[] = new Array(42)
      .fill(0)
      .map((_, daysMatrixIndex) => {
        if (dayjs().month(monthIndex).date(1).weekday() === daysMatrixIndex) {
          isFirstDayInDaysMatrix = true;
        }

        let post: PostWithTags | undefined = undefined;

        if (
          isFirstDayInDaysMatrix &&
          day < dayjs().month(monthIndex).endOf('month').date()
        ) {
          post = posts.find(
            (item) =>
              dayjs(item.date).month() === dayjs().month(monthIndex).month() &&
              dayjs(item.date).year() === dayjs().month(monthIndex).year() &&
              dayjs(item.date).date() ===
                dayjs()
                  .month(monthIndex)
                  .date(day + 1)
                  .date(),
          );
        }

        const tags: (keyof Omit<PostTags, 'postId'>)[] = [];

        if (post) {
          tagColors.forEach((color) => {
            if (post.postTags![color]) {
              tags.push(color);
            }
          });
        }

        return {
          index: daysMatrixIndex,
          date:
            isFirstDayInDaysMatrix &&
            dayjs().month(monthIndex).endOf('month').date() > day
              ? ++day
              : null,
          tags: tags,
        };
      });

    // reverse lines in days matrix
    const daysMatrixReversed: CalendarDay[] = [];

    for (let i = 1; i < 7; i++) {
      const week = daysMatrix.slice(i * 7 - 7, i * 7);
      if (week.some((day) => day.date)) {
        daysMatrixReversed.unshift(...week);
      }
    }

    calendarList.push({
      year: dayjs().month(monthIndex).format('YYYY'),
      month: dayjs().month(monthIndex).format('MMMM'),
      // days: daysMatrix,
      days: daysMatrixReversed,
    });

    if (
      dayjs(posts[posts.length - 1].date).format('YYYY-MMMM') ===
      dayjs().month(monthIndex).format('YYYY-MMMM')
    ) {
      break;
    }
    monthIndex -= 1;
  }

  return calendarList;
}
