import React from 'react';
import { Metadata } from 'next';
import SignUpForm from '@/app/ui/sign-up-form';

export const metadata: Metadata = {
  title: 'Sign Up | Next Dashboard',
};

const Page = () => {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[450px] flex-col p-4 md:-mt-32">
        <SignUpForm />
      </div>
    </main>
  );
};

export default Page;
