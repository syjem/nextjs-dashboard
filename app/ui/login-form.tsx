'use client';

import { lusitana } from '@/app/ui/fonts';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { authenticate } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
import {
  ArrowRight,
  AtSign,
  AlertCircle,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
} from 'lucide-react';
import { useState } from 'react';

const eyeIcons =
  'absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-slate-900 dark:peer-focus:text-slate-200';

const inputIcons =
  'pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-slate-900 dark:peer-focus:text-slate-200';

export default function LoginForm() {
  const [code, action] = useFormState(authenticate, undefined);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const showPasswordHandler = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <form action={action} className="space-y-3 shadow-xl">
      <div className="flex flex-col gap-6 flex-1 rounded-lg border-slate-400 dark:border-slate-800 bg-slate-200 dark:bg-slate-900 p-8">
        <h1 className={`${lusitana.className} text-2xl text-center my-4`}>
          Please log in to continue...
        </h1>
        <div className="w-full">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Input
                className="peer pl-10 py-5 placeholder:text-xs"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                autoComplete="off"
              />
              <AtSign className={inputIcons} />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                className="peer pl-10 py-5 placeholder:text-xs"
                id="password"
                type={!isPasswordVisible ? 'password' : 'text'}
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <LockKeyhole className={inputIcons} />
              {isPasswordVisible ? (
                <EyeOff className={eyeIcons} onClick={showPasswordHandler} />
              ) : (
                <Eye className={eyeIcons} onClick={showPasswordHandler} />
              )}
            </div>
          </div>
        </div>
        <LoginButton />
        <div className="flex h-8 items-end space-x-1">
          {code === 'CredentialSignin' && (
            <>
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p aria-live="polite" className="text-sm text-red-500">
                Invalid credentials
              </p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`${lusitana.className} font-semibold text-base w-full flex justify-center gap-2`}
      aria-disabled={pending}
      disabled={pending}>
      Log in{' '}
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin text-slate-50 dark:text-slate-950" />
      ) : (
        <ArrowRight className="h-4 w-4 text-slate-50 dark:text-slate-950" />
      )}
    </Button>
  );
}
