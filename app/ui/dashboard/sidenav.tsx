import { Suspense } from 'react';
import User from '@/app/dashboard/user';
import { UserSkeleton } from '@/app/ui/skeletons';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { SignOutDialog } from '@/components/sign-out-dialog';

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
        <SignOutDialog />
      </section>
    </div>
  );
}
