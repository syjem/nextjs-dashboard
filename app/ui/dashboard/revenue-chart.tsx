import { fetchRevenue } from '@/app/lib/data';
import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function RevenueChart() {
  const revenue = await fetchRevenue();

  const chartHeight = 250;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-slate-400">No data available.</p>;
  }

  return (
    <Card className="col-span-4">
      <CardHeader className="p-4">
        <CardTitle className="text-lg pl-2">Overview</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="w-full md:col-span-4">
          <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white dark:bg-inherit p-4 md:gap-4">
            <div
              className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
              style={{ height: `${chartHeight}px` }}>
              {yAxisLabels.map((label) => (
                <p key={label}>{label}</p>
              ))}
            </div>

            {revenue.map((month) => (
              <div
                key={month.month}
                className="flex flex-col items-center gap-2">
                <div
                  className="w-full rounded-sm bg-[#cd5e76] dark:bg-[#e01c47]"
                  style={{
                    height: `${(chartHeight / topLabel) * month.revenue}px`,
                  }}></div>
                <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                  {month.month}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center pb-2 px-4 pt-2">
            <CalendarIcon className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
