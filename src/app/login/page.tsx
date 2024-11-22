'use client';
import { signIn } from 'next-auth/react';
import { readUsers } from '../actions/usersActions';

export default function LoginPage() {
  // const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <br />
      <button
        onClick={async () => {
          await readUsers();
        }}
      >
        read users
      </button>
    </>
  );
}
