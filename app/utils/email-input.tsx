import { Input } from '@/components/ui/input';
import { usePathname } from 'next/navigation';

const EmailInput = () => {
  const pathname = usePathname();

  return (
    <Input
      className="peer pl-10 py-5 placeholder:text-xs focus:border-slate-400 dark:focus:border-slate-600"
      id="email"
      type="email"
      name="email"
      required
      autoFocus={pathname === '/sign-up' ? false : true}
      autoComplete="off"
      placeholder="Enter your email address"
    />
  );
};

export default EmailInput;
