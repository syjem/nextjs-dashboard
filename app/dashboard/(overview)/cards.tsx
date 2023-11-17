import { fetchCardData } from '@/app/lib/data';
import { DollarSign, Clock, CreditCard, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
      <Cards title="Collected" value={totalPaidInvoices} type="collected" />
      <Cards title="Pending" value={totalPendingInvoices} type="pending" />
      <Cards title="Invoices" value={numberOfInvoices} type="invoices" />
      <Cards title="Customers" value={numberOfCustomers} type="customers" />
    </>
  );
}

export function Cards({
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
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {Icon && (
            <Icon className="h-5 w-5 text-slate-700 dark:text-gray-500" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-base md:text-xl font-bold">{value}</div>
        </CardContent>
      </Card>
    </>
  );
}
