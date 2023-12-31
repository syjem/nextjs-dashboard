import React from 'react';
import { Metadata } from 'next';
import Header from '@/app/ui/header';
import SignUpForm from '@/app/ui/sign-up-form';

export const metadata: Metadata = {
  title: 'Sign Up | Next Dashboard',
};

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col max-w-[1440px] mx-auto">
      <Header />
      <div className="mx-auto w-full max-w-[450px] p-4">
        <SignUpForm />
      </div>
    </main>
  );
};

export default Page;
