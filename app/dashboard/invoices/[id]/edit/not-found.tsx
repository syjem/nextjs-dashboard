import Link from 'next/link';
import { Frown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <Frown className="w-10 text-slate-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p className="text-slate-400 font-medium">
        Could not find the requested invoice.
      </p>
      <Button asChild className="mt-4">
        <Link href="/dashboard/invoices">Go Back</Link>
      </Button>
    </main>
  );
}
