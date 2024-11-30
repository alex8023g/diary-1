import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { SignInOutBtn } from './SignInOutBtn';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky left-0 top-0 border-b bg-white py-2">
      <div className="mx-auto flex px-5 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px]">
        {/* <Image
          className="mr-3 dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={70}
          height={38}
          priority
        /> */}
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Next.js logo"
          width={110}
          height={50}
          priority
        />
        <SignInOutBtn session={session} />
      </div>
    </header>
  );
}
