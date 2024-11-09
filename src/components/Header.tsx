import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { SignInOutBtn } from './SignInOutBtn';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export async function Header() {
  const session = await getServerSession(authOptions);
  console.log('🚀 ~ Header ~ session:', session);

  return (
    <header className='border flex px-5 py-2'>
      <Image
        className='dark:invert'
        src='https://nextjs.org/icons/next.svg'
        alt='Next.js logo'
        width={70}
        height={38}
        priority
      />
      <SignInOutBtn session={session} />
    </header>
  );
}
