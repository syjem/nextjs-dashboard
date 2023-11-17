'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Files, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { HomeIcon } from '@radix-ui/react-icons';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: Files,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: Users },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      <nav className="w-full">
        <ul className="flex w-full max-w-[400px] md:max-w-full mx-auto md:flex-col grow items-center md:items-start gap-2">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <li
                key={link.name}
                className="flex w-full grow items-center gap-2">
                <Link
                  href={link.href}
                  className={clsx(
                    'flex h-[48px] w-full grow items-center justify-center gap-2 rounded-sm p-3 text-sm text-slate-500 dark:text-slate-400 font-medium hover:text-slate-900 dark:hover:text-zinc-200 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                      'bg-transparent rounded-none md:rounded-sm border-b-[3px] md:border-none border-red-400 md:dark:bg-slate-900 text-slate-900 dark:text-zinc-200 font-semibold':
                        pathname === link.href,
                    }
                  )}>
                  <LinkIcon className="w-5 h-5" />
                  <p className="hidden md:block">{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
