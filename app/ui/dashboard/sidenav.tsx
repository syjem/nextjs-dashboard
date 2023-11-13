import { signOut } from '@/auth';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { ModeToggle } from '@/components/mode-toggle';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div>
          <NavLinks />
        </div>
        <div>
          <ModeToggle />
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
      </div>
    </div>
  );
}
