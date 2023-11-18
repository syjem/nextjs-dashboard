import React from 'react';
import { getUser } from '@/app/lib/data';
import { generateFallback } from '@/app/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import { SignOutDialog } from '@/components/sign-out-dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const User = async () => {
  const user = await getUser('team@vercel.com');
  const initials = generateFallback(user.name);
  const firstName = user.name.split(' ')[0];

  return (
    <div className="flex items-center gap-2 justify-between w-full">
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src={user.image_url} alt={user.name} />
          <AvatarFallback className="text-xs">{initials}</AvatarFallback>
        </Avatar>
        <span className="font-semibold text-base text-slate-700 dark:text-slate-300">
          {firstName}
        </span>
      </div>
      <div className="flex items-center">
        <ModeToggle />
        <div className="block md:hidden">
          <SignOutDialog />
        </div>
      </div>
    </div>
  );
};

export default User;
