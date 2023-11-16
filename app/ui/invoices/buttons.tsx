import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { deleteInvoice } from '@/app/lib/actions';
import { Pencil1Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons';

export function CreateInvoice() {
  return (
    <Button asChild>
      <Link href="/dashboard/invoices/create">
        <span className="hidden md:block font-semibold">Create</span>{' '}
        <PlusIcon className="h-5 md:ml-1" />
      </Link>
    </Button>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border border-slate-300 dark:border-slate-700 p-2 hover:bg-slate-200 dark:hover:bg-slate-800">
      <Pencil1Icon className="w-4 h-4" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <>
      <form action={deleteInvoiceWithId}>
        <button className="rounded-md border border-slate-300 dark:border-slate-700 p-2 hover:bg-slate-200 dark:hover:bg-slate-800">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-4 h-4" />
        </button>
      </form>
    </>
  );
}
