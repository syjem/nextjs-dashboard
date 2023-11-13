import { Input } from '@/components/ui/input';
import { MutableRefObject } from 'react';

type PasswordInputProps = {
  passwordRef: MutableRefObject<HTMLInputElement | null>;
  isPasswordVisible: boolean;
};

const PasswordInput = ({
  passwordRef,
  isPasswordVisible,
}: PasswordInputProps) => {
  return (
    <Input
      ref={passwordRef}
      className="peer pl-10 py-5 placeholder:text-xs focus:border-slate-400 dark:focus:border-slate-600"
      id="password"
      type={!isPasswordVisible ? 'password' : 'text'}
      name="password"
      placeholder="Enter password"
      required
      minLength={6}
    />
  );
};

export default PasswordInput;
