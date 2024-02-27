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
import { signOutAction } from '@/actions/sign-out';

export function SignOutDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          type="button"
          className="flex gap-2 text-slate-800 dark:text-slate-200 dark:hover:bg-transparent">
          <LogOut className="w-5 h-5" />
          <span className="hidden md:block">Sign Out</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left text-base sm:text-lg">
            Are you sure you want to sign out?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            Please confirm your action.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="items-center">
          <AlertDialogCancel className="border-slate-300">
            Cancel
          </AlertDialogCancel>
          <form action={signOutAction}>
            <Button
              type="submit"
              className="font-semibold bg-[#e01c47] hover:bg-[#ee093a] text-slate-100 dark:bg-[#e01c47] dark:hover:bg-[#ee093a] dark:text-slate-100">
              Sign out
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
