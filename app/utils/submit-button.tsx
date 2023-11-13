import { useFormStatus } from 'react-dom';
import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';

type PropType = {
  text: string;
};

function SubmitButton({ text }: PropType) {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`${lusitana.className} font-semibold text-base w-full flex justify-center gap-2`}
      aria-disabled={pending}
      disabled={pending}>
      {text}{' '}
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin text-slate-50 dark:text-slate-950" />
      ) : (
        <ArrowRight className="h-4 w-4 text-slate-50 dark:text-slate-950" />
      )}
    </Button>
  );
}

export default SubmitButton;
