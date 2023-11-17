'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { useFormState } from 'react-dom';
import { lusitana } from '@/app/ui/fonts';
import { Label } from '@/components/ui/label';
import { authenticate } from '@/app/lib/actions';
import EmailInput from '@/app/utils/email-input';
import SubmitButton from '@/app/utils/submit-button';
import PasswordInput from '@/app/utils/password-input';
import { AtSign, AlertCircle, Eye, EyeOff, LockKeyhole } from 'lucide-react';

export default function LoginForm() {
  const [code, action] = useFormState(authenticate, undefined);
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
    <form action={action} className="space-y-3 shadow-xl">
      <div className="flex flex-col gap-6 flex-1 rounded-lg border-slate-400 dark:border-slate-800 bg-slate-300 dark:bg-slate-900 p-8">
        <h1 className={`${lusitana.className} text-2xl text-center my-4`}>
          Please log in to continue...
        </h1>
        <div className="w-full">
          <div className="flex flex-col gap-3">
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
            <div>
              <Link href="/password-reset" className="flex ml-auto w-fit">
                <span className="text-sm dark:text-slate-300 hover:underline">
                  Forgot password?
                </span>
              </Link>
            </div>
          </div>
        </div>
        <SubmitButton text="Log in" />
        <div className="flex items-center ml-auto w-fit text-sm gap-1 text-slate-600 dark:text-slate-400">
          Don&apos;t have an account?
          <Link href="/sign-up">
            <span className="text-slate-950 font-medium dark:text-slate-300 hover:underline">
              Sign Up
            </span>
          </Link>
        </div>
        <div className="flex h-8 items-end space-x-1">
          {code === 'CredentialSignin' && (
            <div className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-red-500" />
              <p aria-live="polite" className="text-sm text-red-500">
                Invalid credentials. <br /> Please check your email and
                password.
              </p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
