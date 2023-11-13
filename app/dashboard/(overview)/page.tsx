import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';
import CardWrapper from './cards';
import { lusitana } from '@/app/ui/fonts';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2
              className={` ${lusitana.className} text-3xl font-bold tracking-tight`}>
              Dashboard
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeleton />}>
              <CardWrapper />
            </Suspense>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="p-4">
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Suspense fallback={<RevenueChartSkeleton />}>
                  <RevenueChart />
                </Suspense>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className="p-4">
                <CardTitle>Recent Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                  <LatestInvoices />
                </Suspense>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
