import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { generateFallback } from '@/app/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CustomersTable, FormattedCustomersTable } from '@/app/lib/definitions';

export default async function CustomersTable({
  customers,
}: {
  customers: FormattedCustomersTable[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-slate-50 dark:bg-slate-900 p-2 md:pt-0 border border-slate-200 dark:border-slate-800">
              <div className="md:hidden">
                {customers?.map((customer) => (
                  <div
                    key={customer.id}
                    className="mb-2 w-full rounded-md bg-slate-50 dark:bg-slate-900 p-4">
                    <div className="flex items-center justify-between border-b dark:border-slate-800 pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <Avatar className="w-8 h-8">
                            <AvatarImage
                              src={customer.image_url}
                              alt={customer.name}
                            />
                            <AvatarFallback className="text-xs">
                              {generateFallback(customer.name)}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <p className="text-sm text-gray-500">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b border-slate-200 dark:border-slate-700 py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Pending</p>
                        <p className="font-medium">{customer.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Paid</p>
                        <p className="font-medium">{customer.total_paid}</p>
                      </div>
                    </div>
                    <div className="pt-4 text-sm">
                      <p>{customer.total_invoices} invoices</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-slate-950 dark:text-slate-200 md:table">
                <thead className="rounded-md text-left text-sm font-normal border-b dark:border-slate-700">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Invoices
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Total Pending
                    </th>
                    <th scope="col" className="px-4 py-5 font-medium">
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-950 dark:text-slate-50">
                  {customers.map((customer) => (
                    <tr key={customer.id} className="group">
                      <td className="whitespace-nowrap bg-slate-50 dark:bg-slate-900 py-5 pl-4 pr-3 text-sm text-slate-950 dark:text-slate-100 group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage
                              src={customer.image_url}
                              alt={customer.name}
                            />
                            <AvatarFallback>
                              {generateFallback(customer.name)}
                            </AvatarFallback>
                          </Avatar>
                          <p>{customer.name}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap bg-slate-50 dark:bg-slate-900 px-4 py-5 text-sm">
                        {customer.email}
                      </td>
                      <td className="whitespace-nowrap bg-slate-50 dark:bg-slate-900 px-4 py-5 text-sm">
                        {customer.total_invoices}
                      </td>
                      <td className="whitespace-nowrap bg-slate-50 dark:bg-slate-900 px-4 py-5 text-sm">
                        {customer.total_pending}
                      </td>
                      <td className="whitespace-nowrap bg-slate-50 dark:bg-slate-900 px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                        {customer.total_paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
