'use client';
import { GithubIcon } from '@/components/Icons/GithubIcon';
import { GoogleIcon } from '@/components/Icons/GoogleIcon';
import { YandexIcon } from '@/components/Icons/YandexIcon';
import { signIn } from 'next-auth/react';

export default function LoginBtnsGroup() {
  return (
    <>
      <div className="flex flex-col items-center space-y-5 pt-24">
        <button
          className="flex min-w-72 rounded-lg border px-5 py-3 shadow-md"
          onClick={() => signIn('google')}
        >
          <span className="mr-6">
            <GoogleIcon />
          </span>
          <span className="font-semibold">Continue with Google</span>
        </button>
        <button
          className="flex min-w-72 rounded-lg border bg-black px-5 py-3 shadow-md"
          onClick={() => signIn('github')}
        >
          <span className="mr-6">
            <GithubIcon />
          </span>
          <span className="font-semibold text-white">Continue with GitHub</span>
        </button>
        <button
          className="flex min-w-72 rounded-lg border bg-yellow-400 px-5 py-3 shadow-md"
          onClick={() => signIn('yandex')}
        >
          <span className="mr-6">
            <YandexIcon />
          </span>
          <span className="font-semibold">Continue with Yandex</span>
        </button>
      </div>
    </>
  );
}
