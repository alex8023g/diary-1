import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { SignInOutBtn } from './SignInOutBtn';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export async function Header() {
  const session = await getServerSession(authOptions);
  console.log('🚀 ~ Header ~ session:', session);

  return (
    <header className="border py-2">
      <div className="mx-auto flex px-5 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={70}
          height={38}
          priority
        />
        <SignInOutBtn session={session} />
      </div>
    </header>
  );
}
