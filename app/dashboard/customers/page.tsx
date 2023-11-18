import React from 'react';
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <main className="w-full pb-20">
      <CustomersTable customers={customers} />
    </main>
  );
};

export default Page;
