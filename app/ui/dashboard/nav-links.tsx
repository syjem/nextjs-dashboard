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
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm text-slate-400 font-medium  hover:text-slate-800 dark:hover:text-slate-200 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-green-200 dark:bg-slate-900 text-slate-700 dark:text-slate-200':
                  pathname === link.href,
              }
            )}>
            <LinkIcon className="w-5 h-5" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
