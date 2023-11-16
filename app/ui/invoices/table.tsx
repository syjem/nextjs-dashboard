import InvoiceStatus from '@/app/ui/invoices/status';
import { fetchFilteredInvoices } from '@/app/lib/data';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  formatDateToLocal,
  formatCurrency,
  generateFallback,
} from '@/app/lib/utils';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-2 md:pt-0 border border-slate-200 dark:border-slate-800">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-slate-50 dark:bg-slate-900 p-4">
                <div className="flex items-center justify-between border-b dark:border-slate-800 pb-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage
                          src={invoice.image_url}
                          alt={invoice.name}
                        />
                        <AvatarFallback className="text-xs">
                          {generateFallback(invoice.name)}
                        </AvatarFallback>
                      </Avatar>
                      <p className="font-normal">{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-sm font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p className="text-xs">{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-slate-950 dark:text-slate-200 md:table">
            <thead className="rounded-lg text-left text-sm font-normal border-b dark:border-slate-700">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-50 dark:bg-slate-900">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b dark:border-slate-700 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={invoice.image_url}
                          alt={invoice.name}
                        />
                        <AvatarFallback>
                          {generateFallback(invoice.name)}
                        </AvatarFallback>
                      </Avatar>
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap text-center pr-5 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
