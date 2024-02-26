'use client';

import Link from 'next/link';
import { AtSign } from 'lucide-react';
import { lusitana } from '@/app/ui/fonts';
import { Label } from '@/components/ui/label';
import EmailInput from '@/app/utils/email-input';
import SubmitButton from '@/app/utils/submit-button';

export default function ForgotPasswordForm() {
  return (
    <form className="space-y-3">
      <div className="flex flex-col shadow-xl gap-6 flex-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent dark:transparent p-8">
        <h1 className={`${lusitana.className} text-2xl text-center`}>
          Request a new password...
        </h1>
        <div className="mt-2 flex flex-col gap-3">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <EmailInput />
            <AtSign className="input-icons" />
          </div>
        </div>
        <SubmitButton text="Continue" />
        <div className="flex items-center ml-auto w-fit text-sm gap-1 text-slate-600 dark:text-slate-400">
          Create another account.
          <Link href="/sign-up">
            <span className="text-slate-950 font-medium dark:text-slate-300 hover:underline">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
}
