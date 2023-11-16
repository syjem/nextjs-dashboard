import { signOut } from '@/auth';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SignOutDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          type="button"
          className="flex gap-2 dark:text-slate-400 dark:hover:bg-transparent">
          <LogOut className="w-5 h-5" />
          <span className="hidden md:block">Sign Out</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left text-base sm:text-lg">
            Are you sure you want to sign-out?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            Please confirm your action.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="items-center">
          <AlertDialogCancel className="border-slate-300">
            Cancel
          </AlertDialogCancel>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}>
            <Button
              type="submit"
              className="font-semibold bg-[#e01c47] hover:bg-[#ee093a] text-slate-100 dark:bg-[#e01c47] dark:hover:bg-[#ee093a] dark:text-slate-100">
              Confirm
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
