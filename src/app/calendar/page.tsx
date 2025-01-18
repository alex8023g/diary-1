import { createCalendarList } from '../actions/createCalendarList';

export default async function CalendarPage() {
  const calendarList = await createCalendarList();
  return (
    <div className='mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-8 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4'>
      {calendarList.map((month) => (
        <div key={month.year + month.month} className='container'>
          <div className='mb-2 grid grid-cols-7 text-center'>
            <div className='relative h-5'>
              <span className='absolute left-[calc(50%-9px)] top-0 overflow-visible text-nowrap font-semibold'>
                {month.year} {month.month}
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
            {month.days.map((item) => {
              return (
                <div key={item.index} className='bg-white py-2 text-center'>
                  <div>{item.date}</div>
                  <ul className='flex justify-center space-x-1'>
                    {item.tags.map((color) => (
                      <li
                        key={color}
                        className={`h-[5px] w-[5px] rounded-full bg-${color}-500`}
                      ></li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
