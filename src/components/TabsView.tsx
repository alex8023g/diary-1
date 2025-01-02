'use client';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, List } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export function TabsView() {
  const pathname = usePathname();
  const router = useRouter();
  console.log('🚀 ~ TabsView ~ pathname:', pathname);
  return (
    <Tabs
      className='ml-auto w-[80px]'
      value={pathname}
      onValueChange={(e) => {
        console.log(e);
        router.push(e);
      }}
    >
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='/'>
          <List className='h-4 w-4' />
        </TabsTrigger>
        <TabsTrigger value='/calendar'>
          <CalendarDays className='h-4 w-4' />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
