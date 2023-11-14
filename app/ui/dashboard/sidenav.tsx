import { Suspense } from 'react';
import { signOut } from '@/auth';
import { LogOut } from 'lucide-react';
import User from '@/app/dashboard/user';
import { Button } from '@/components/ui/button';
import { UserSkeleton } from '@/app/ui/skeletons';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <header className="relative flex items-center gap-2 mb-6 w-full">
        <Suspense fallback={<UserSkeleton />}>
          <User />
        </Suspense>
      </header>
      <section className="flex grow flex-row items-center md:items-start justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="flex w-full items-center space-x-2 md:flex-col md:items-start md:space-x-0 md:space-y-2">
          <NavLinks />
        </div>
        <div>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}>
            <Button
              variant="ghost"
              type="submit"
              className="flex gap-2 dark:text-slate-400 dark:hover:bg-transparent">
              <LogOut className="w-5 h-5" />
              <span className="hidden md:block">Sign Out</span>
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
