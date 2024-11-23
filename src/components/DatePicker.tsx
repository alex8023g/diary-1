'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CalendarCustom } from '@/components/CalendarCustom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import dayjs from 'dayjs';

type Props = {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export function DatePicker({ date, setDate }: Props) {
  // const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'ghost'}
          className={cn(
            'justify-start px-0 text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
          {/* {date ? format(date, 'PPP') : <span>Pick a date</span>} */}
          {date ? dayjs(date).format('DD.MM.YYYY') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <CalendarCustom
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
