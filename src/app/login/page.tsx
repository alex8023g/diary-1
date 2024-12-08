import { getServerSession } from 'next-auth';
import LoginBtnsGroup from './LoginBtnsGroup';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  console.log('🚀 ~ LoginPage ~ session:', session);
  if (!session) {
    return <LoginBtnsGroup />;
  } else {
    redirect('/');
  }
}
