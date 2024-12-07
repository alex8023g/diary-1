'use client';
import { signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { Session } from 'next-auth';
import { UserCircleIconCustom } from './Icons/UserCircleIconCustom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  session: Session | null;
};
export function SignInOutBtn({ session }: Props) {
  const pathname = usePathname();
  console.log('🚀 ~ SignInOutBtn ~ pathname:', pathname);
  if (session) {
    console.log('🚀 ~ SignInOutBtn ~ session:', session);
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="border-0 ring-0 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <button className="ml-auto pr-0">
            <UserCircleIconCustom color="grey" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="" side="bottom">
          <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => signOut()}>
            <span className="mr-auto inline-block">Sign out</span>
            <LogOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else if (pathname !== '/login') {
    return (
      <>
        {/* <Button className="ml-auto" onClick={() => signIn()}>
          Sign in
        </Button> */}
        <Button asChild className="ml-auto">
          <Link href="/login">Sign in</Link>
        </Button>
      </>
    );
  }
}
