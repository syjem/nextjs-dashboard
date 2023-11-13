import clsx from 'clsx';
import { RefreshCw } from 'lucide-react';
import { lusitana } from '@/app/ui/fonts';
import { generateFallback } from '@/app/lib/utils';
import { fetchLatestInvoices } from '@/app/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
      <div className="bg-white dark:bg-inherit">
        {latestInvoices.map((invoice, i) => {
          return (
            <div
              key={invoice.id}
              className={clsx(
                'flex flex-row items-center justify-between py-2',
                {
                  'border-t dark:border-slate-900': i !== 0,
                }
              )}>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                  />
                  <AvatarFallback>
                    {generateFallback(invoice.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {invoice.name}
                  </p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    {invoice.email}
                  </p>
                </div>
              </div>
              <p
                className={`${lusitana.className} truncate text-sm font-medium md:text-base`}>
                {invoice.amount}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center pb-2 pt-2">
        <RefreshCw className="h-5 w-5 text-gray-500" />
        <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
      </div>
    </div>
  );
}
