'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { Label } from '@/components/ui/label';
import NameInput from '@/app/utils/name-input';
import EmailInput from '@/app/utils/email-input';
import SubmitButton from '@/app/utils/submit-button';
import PasswordInput from '@/app/utils/password-input';
import { AtSign, Eye, EyeOff, LockKeyhole, User } from 'lucide-react';

export default function SignUpForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const showPasswordHandler = () => {
    setIsPasswordVisible(!isPasswordVisible);
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  const handleIconKeyPress = (e: React.KeyboardEvent<SVGSVGElement>) => {
    if (e.key === 'Enter') {
      showPasswordHandler();
    }
  };

  return (
    <form className="space-y-3 shadow-xl">
      <div className="flex flex-col gap-6 flex-1 rounded-lg border-slate-400 dark:border-slate-800 bg-slate-200 dark:bg-slate-900 p-8">
        <h1 className={`${lusitana.className} text-2xl text-center my-4`}>
          Please sign up to continue...
        </h1>
        <div className="w-full">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Name</Label>
            <div className="relative">
              <NameInput />
              <User className="input-icons" />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <EmailInput />
              <AtSign className="input-icons" />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <PasswordInput
                passwordRef={passwordRef}
                isPasswordVisible={isPasswordVisible}
              />
              <LockKeyhole className="input-icons" />
              {isPasswordVisible ? (
                <EyeOff
                  className="eye-icons"
                  onClick={showPasswordHandler}
                  onKeyDown={handleIconKeyPress}
                  tabIndex={0}
                  role="button"
                  aria-label="Hide Password"
                />
              ) : (
                <Eye
                  className="eye-icons"
                  onClick={showPasswordHandler}
                  onKeyDown={handleIconKeyPress}
                  tabIndex={0}
                  role="button"
                  aria-label="Show Password"
                />
              )}
            </div>
          </div>
        </div>
        <SubmitButton text="Sign up" />
        <div className="flex items-center ml-auto w-fit text-sm gap-1 text-slate-600 dark:text-slate-400">
          Already have an account?
          <Link href="/login">
            <span className="text-slate-950 font-medium dark:text-slate-300 hover:underline">
              Login
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
}
