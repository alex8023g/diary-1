'use client';
import { signIn, signOut } from 'next-auth/react';
import { Button } from './ui/button';
import { Session } from 'next-auth';

type Props = {
  session: Session | null;
};
export function SignInOutBtn({ session }: Props) {
  if (session) {
    return (
      <Button className='ml-auto' onClick={() => signOut()}>
        Sign out
      </Button>
    );
  } else {
    return (
      <Button className='ml-auto' onClick={() => signIn()}>
        Sign in
      </Button>
    );
  }
}
