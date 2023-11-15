import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <Skeleton className="h-5 w-24" />
        </CardTitle>
        <Skeleton className="h-5 w-5" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          <Skeleton className="h-5 w-20" />
        </div>
      </CardContent>
    </Card>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <Card className="col-span-4">
      <CardHeader className="p-4">
        <CardTitle className="text-lg pl-2">
          <Skeleton className="h-5 w-20" />
        </CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="w-full md:col-span-4">
          <div className="pb-2 px-4 pt-2">
            <Skeleton className="h-80 w-[450px]" />
          </div>

          <div className="flex items-center gap-4 pb-2 px-4 pt-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-24" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <Skeleton className="mr-2 h-8 w-8 rounded-full" />
        <div className="min-w-0">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="mt-2 h-4 w-12" />
        </div>
      </div>
      <Skeleton className="mt-2 h-4 w-12" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className={`${shimmer} relative flex w-full flex-col overflow-hidden md:col-span-4 lg:col-span-4`}>
      <Skeleton className="mb-4 h-8 w-36 rounded-md" />
      <div className="flex grow flex-col justify-between rounded-xl bg-inherit p-2">
        <div className="bg-inherit px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <div className="flex items-center pb-2 pt-6">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="ml-2 h-4 w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-slate-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-slate-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-6 w-24" />
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-32" />
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16" />
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16" />
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <Skeleton className="h-6 w-16" />
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <Skeleton className="h-[38px] w-[38px]" />
          <Skeleton className="h-[38px] w-[38px]" />
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-inherit p-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-8">
        <div className="flex items-center">
          <Skeleton className="mr-2 h-8 w-8 rounded-full" />
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="h-6 w-16" />
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <Skeleton className="h-6 w-16" />
          <Skeleton className="mt-2 h-6 w-24" />
        </div>
        <div className="flex justify-end gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
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
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-100 dark:bg-slate-900">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function UserSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="rounded-full w-[30px] h-[30px]" />
      <Skeleton className="w-20 h-5" />
    </div>
  );
}
