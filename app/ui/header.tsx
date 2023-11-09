import { Button } from '@/components/ui/button';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import favicon from '@/app/favicon.ico';
import { ModeToggle } from '@/components/mode-toggle';

const Header = () => {
  return (
    <header className="bg-slate-100 dark:bg-slate-950 shadow-md border-b-[1px] dark:border-slate-900 py-4 px-6">
      <nav className="flex justify-between">
        <div>
          <Image src={favicon} width={40} height={40} alt="Logo" />
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/dashboard" className={`${lusitana.className}`}>
              Dashboard
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
