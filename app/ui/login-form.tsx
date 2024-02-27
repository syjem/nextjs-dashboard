'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { useFormState } from 'react-dom';
import { lusitana } from '@/app/ui/fonts';
import { Label } from '@/components/ui/label';
import EmailInput from '@/app/utils/email-input';
import SubmitButton from '@/app/utils/submit-button';
import PasswordInput from '@/app/utils/password-input';
import {
  AtSign,
  AlertCircle,
  Eye,
  EyeOff,
  LockKeyhole,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { signInAuth } from '@/actions/sign-in';

export default function LoginForm() {
  const [code, action] = useFormState(signInAuth, undefined);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const populateFields = () => {
    setEmail('team@vercel.com');
    setPassword('vercel-team-2023');
  };

  return (
    <form action={action} className="space-y-3">
      <div className="flex flex-col gap-6 flex-1 shadow-xl rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent dark:bg-transparent p-8">
        <h1 className={cn('text-2xl text-center my-4', lusitana.className)}>
          Please log in to continue...
        </h1>
        <div className="w-full">
          <div className="relative flex flex-col gap-3">
            <Label htmlFor="email" className="inline-block w-fit">
              Email
            </Label>
            <div className="relative">
              <EmailInput email={email} />
              <AtSign className="input-icons" />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <PasswordInput
                passwordValue={password}
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
            <div className="flex items-center justify-between">
              {code === 'CredentialSignin' && (
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <p aria-live="polite" className="text-xs text-red-500">
                    Invalid credentials.
                  </p>
                </div>
              )}
              <Link href="/forgot-password" className="flex ml-auto w-fit">
                <span className="text-sm dark:text-slate-300 hover:underline">
                  Forgot password?
                </span>
              </Link>
            </div>
          </div>
        </div>
        <SubmitButton text="Log in" action="Logging in" />
        <div className="flex items-center ml-auto w-fit text-sm gap-1 text-slate-600 dark:text-slate-400">
          Don&apos;t have an account?
          <Link href="/sign-up">
            <span className="text-slate-950 font-medium dark:text-slate-300 hover:underline">
              Sign Up
            </span>
          </Link>
        </div>
        {!email && !password && (
          <div
            onClick={populateFields}
            title="Example credentials"
            className="mt-2 flex justify-center gap-1 cursor-pointer underline text-red-600 dark:text-blue-600">
            <span className="text-xs">Use example credentials</span>
            <ExternalLink className="w-4 h-4" />
          </div>
        )}
      </div>
    </form>
  );
}
