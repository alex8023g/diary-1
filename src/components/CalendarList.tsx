'use client';
import { tagColors } from '@/consts/tagColors';
import { PostWithTags } from '@/types/postTypes';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import weekday from 'dayjs/plugin/weekday';
dayjs.locale('ru');
dayjs.extend(weekday);
const daysMatrix = new Array(42).fill(0).map((_, i) => i);
const monthsMatrix = new Array(100).fill(0).map((_, i) => i);

type Props = {
  posts: PostWithTags[];
};
export function CalendarList({ posts }: Props) {
  return (
    <div className='mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-8 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4'>
      {monthsMatrix.map((month, monthIndex) => {
        let firstDate = false;
        let day = 0;

        return (
          <div key={month} className='container'>
            <div className='mb-2 grid grid-cols-7 text-center'>
              <div className='relative h-5'>
                <span className='absolute left-[calc(50%-9px)] top-0 overflow-visible text-nowrap font-semibold'>
                  {dayjs().month(-monthIndex).format('YYYY')}{' '}
                  {dayjs().month(-monthIndex).format('MMMM')}
                </span>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='grid grid-cols-7 text-center text-sm font-medium'>
              <div>Пн</div>
              <div>Вт</div>
              <div>Ср</div>
              <div>Чт</div>
              <div>Пт</div>
              <div>Сб</div>
              <div>Вс</div>
            </div>
            <div className='grid grid-cols-7 rounded-lg bg-white text-sm'>
              {daysMatrix.map((item, dayIndex) => {
                if (dayjs().month(-monthIndex).date(1).weekday() === dayIndex) {
                  firstDate = true;
                }
                const post = posts.find(
                  (item) =>
                    dayjs(item.date).month() ===
                      dayjs().month(-monthIndex).month() &&
                    dayjs(item.date).year() ===
                      dayjs().month(-monthIndex).year() &&
                    dayjs(item.date).date() ===
                      dayjs()
                        .month(-monthIndex)
                        .date(day + 1)
                        .date(),
                );
                return (
                  <div key={item} className='bg-white py-2 text-center'>
                    <div>
                      {firstDate &&
                      day < dayjs().month(-monthIndex).endOf('month').date()
                        ? ++day
                        : ''}
                    </div>
                    <ul className='flex justify-center space-x-1'>
                      {firstDate &&
                        tagColors.map((color) =>
                          post?.postTags![color] ? (
                            <li
                              key={color}
                              className={`h-[5px] w-[5px] rounded-full bg-${color}-500`}
                            ></li>
                          ) : null,
                        )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
