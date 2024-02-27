import { useFormStatus } from 'react-dom';
import { lusitana } from '@/app/ui/fonts';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type PropType = {
  text: string;
  action?: string;
};

function SubmitButton({ text, action }: PropType) {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      disabled={pending}
      className={cn(
        'font-semibold text-base w-full flex justify-center gap-2',
        lusitana.className
      )}>
      {pending ? (
        <>
          {action}
          <Loader2 className="h-4 w-4 animate-spin text-slate-50 dark:text-slate-950" />
        </>
      ) : (
        <>
          {text}
          <ArrowRight className="h-4 w-4 text-slate-50 dark:text-slate-950" />
        </>
      )}
    </Button>
  );
}

export default SubmitButton;
