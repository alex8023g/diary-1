import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { SignInOutBtn } from './SignInOutBtn';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { TabsView } from './TabsView';

export async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className='sticky left-0 top-0 z-10 border-b bg-opacity-20 bg-clip-padding py-2 backdrop-blur-lg backdrop-filter'>
      {/* <div className='mx-auto flex px-5 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]'> */}
      <div className='mx-auto flex px-4 sm:px-6 xl:max-w-none xl:px-8'>
        <Image
          className='dark:invert'
          src='/logo.svg'
          alt='Next.js logo'
          width={110}
          height={50}
          priority
        />
        <TabsView />
        <SignInOutBtn session={session} />
      </div>
    </header>
  );
}
