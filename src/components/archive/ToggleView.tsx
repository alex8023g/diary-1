import { CalendarDays, List } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export function ToggleView() {
  return (
    <ToggleGroup type='single' size='sm' className='ml-auto'>
      <ToggleGroupItem value='bold' aria-label='Toggle bold'>
        <List className='h-4 w-4' />
      </ToggleGroupItem>
      <ToggleGroupItem value='italic' aria-label='Toggle italic'>
        <CalendarDays className='h-4 w-4' />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
