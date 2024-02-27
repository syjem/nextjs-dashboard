'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createInvoice } from '@/actions/create-invoices';
import { ClockIcon } from '@radix-ui/react-icons';
import { CustomerField } from '@/app/lib/definitions';
import { CircleDollarSign, UserCircle } from 'lucide-react';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {}, isSuccess: true };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-4 md:p-6 md:py-8 max-w-[500px] mx-auto md:mx-0">
        {/* Customer Name */}
        <div className="mb-4">
          <Label htmlFor="customer" className="inline-block mb-3">
            Choose customer
          </Label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer py-2 pl-10 pr-4 flex h-10 w-full rounded-md border border-slate-200 bg-white text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
              aria-describedby="customer-error">
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircle className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500" />
          </div>
          {state.errors?.customerId ? (
            <div
              id="customer-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500 italic">
              {state.errors.customerId.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <Label htmlFor="amount">Enter amount</Label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <Input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                aria-describedby="amount-error"
                className="peer block py-2 pl-10 text-sm placeholder:text-xs"
              />
              <CircleDollarSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-slate-900 dark:peer-focus:text-slate-300" />
            </div>
            {state.errors?.amount ? (
              <div
                id="amount-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500 italic">
                {state.errors.amount.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset className="inline-block mt-3">
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md py-3">
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center">
                <Input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  aria-describedby="status-error"
                  className="h-4 w-4 border-slate-300 bg-slate-100 dark:bg-slate-950 focus:ring-2 focus:ring-slate-500 dark:border-slate-600 dark:ring-offset-slate-800 dark:focus:ring-slate-950"
                />
                <Label
                  htmlFor="pending"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-slate-500 dark:bg-slate-700 px-3 py-1.5 text-xs font-medium text-slate-100 dark:text-slate-300">
                  Pending <ClockIcon className="h-4 w-4" />
                </Label>
              </div>
              <div className="flex items-center">
                <Input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  aria-describedby="status-error"
                  className="h-4 w-4 border-slate-300 bg-slate-100 dark:bg-slate-950 focus:ring-2 focus:ring-slate-500 dark:border-slate-600 dark:ring-offset-slate-800 dark:focus:ring-slate-950"
                />
                <Label
                  htmlFor="paid"
                  className="ml-2 flex items-center gap-1.5 rounded-full bg-emerald-400 dark:bg-emerald-800 px-3 py-1.5 text-xs font-medium text-slate-100">
                  Paid{' '}
                  <CircleDollarSign className="h-4 w-4 dark:text-slate-300" />
                </Label>
              </div>
            </div>
          </div>
          {state.errors?.status ? (
            <div
              id="status-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500 italic">
              {state.errors.status.map((error: string) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          ) : null}
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4 max-w-[500px] mx-auto md:mx-0">
        <Button asChild variant="outline" type="button">
          <Link href="/dashboard/invoices">Cancel</Link>
        </Button>
        <Button type="submit" className="font-medium">
          Create Invoice
        </Button>
      </div>
    </form>
  );
}
