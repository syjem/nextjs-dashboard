import React from 'react';
import { getUser } from '@/app/lib/data';
import { generateFallback } from '@/app/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/components/mode-toggle';

const User = async () => {
  const user = await getUser('user_jem@nextmail.com');
  const initials = generateFallback(user.name);
  const firstName = user.name.split(' ')[0];

  return (
    <div className="flex items-center gap-2 justify-between w-full">
      <div className="flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src={user.image_url} alt={user.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <span className="font-semibold text-base">{firstName}</span>
      </div>
      <ModeToggle />
    </div>
  );
};

export default User;
