import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import favicon from '@/app/favicon.ico';
import { lusitana } from '@/app/ui/fonts';
import { ModeToggle } from '@/components/mode-toggle';

const Header = () => {
  return (
    <header className="bg-slate-100 dark:bg-slate-950 shadow-md border-b-[1px] dark:border-slate-900 py-4 px-6 md:px-20">
      <nav className="flex justify-between">
        <div>
          <Image src={favicon} width={30} height={30} alt="Logo" />
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
