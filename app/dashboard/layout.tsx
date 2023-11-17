import React from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row max-w-[1440px] mx-auto">
      <aside className="bg-slate-50 bg-opacity-[0.96] md:bg-opacity-100 dark:bg-slate-950 w-full sticky md:static top-0 flex-none md:w-64 z-10 shadow-md dark:shadow-xl border-r dark:border-slate-800">
        <SideNav />
      </aside>
      <main className="flex-grow p-4 md:px-12 md:py-6">{children}</main>
    </div>
  );
};

export default Layout;
