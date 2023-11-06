import React from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row max-w-[1440px] mx-auto">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:px-12 md:py-6">{children}</div>
    </div>
  );
};

export default Layout;
