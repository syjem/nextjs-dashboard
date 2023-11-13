import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { DollarSign, Clock, CreditCard, Users } from 'lucide-react';

const iconMap = {
  collected: DollarSign,
  customers: Users,
  pending: Clock,
  invoices: CreditCard,
};

export default async function CardWrapper() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Invoices" value={numberOfInvoices} type="invoices" />
      <Card title="Customers" value={numberOfCustomers} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-2 py-4 text-center text-2xl`}>
        {value}
      </p>
    </div>
  );
}
