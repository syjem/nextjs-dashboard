'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchHandler = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');

    term ? params.set('query', term) : params.delete('query');

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        id="search"
        name="search"
        type="text"
        className="peer block w-full max-w-md py-[9px] pl-10 text-sm"
        placeholder={placeholder}
        onChange={(e) => searchHandler(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-500 peer-focus:text-slate-900 dark:peer-focus:text-slate-300" />
    </div>
  );
}
