import clsx from 'clsx';
import { CheckIcon, ClockIcon } from '@radix-ui/react-icons';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx('inline-flex items-center rounded-full text-xs', {
        'bg-gray-100 text-gray-500': status === 'pending',
        'border border-green-500 dark:border-green-600 bg-green-400 dark:bg-green-500 text-slate-100':
          status === 'paid',
      })}>
      {status === 'pending' ? (
        <>
          <ClockIcon className="w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          <CheckIcon className="w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
