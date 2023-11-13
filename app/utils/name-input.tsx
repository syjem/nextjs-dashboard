import { Input } from '@/components/ui/input';

const NameInput = () => {
  return (
    <Input
      className="peer pl-10 py-5 placeholder:text-xs focus:border-slate-400 dark:focus:border-slate-600"
      id="name"
      type="name"
      name="name"
      required
      autoFocus
      autoComplete="off"
      placeholder="Enter your name"
    />
  );
};

export default NameInput;
