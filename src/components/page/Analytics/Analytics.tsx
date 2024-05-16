import BasicTable from "@/components/custom/BasicTable/BasicTable";
import AreaCharts from "@/components/custom/charts/AreaChart/AreaCharts";
import BarChart from "@/components/custom/charts/BarChart/BarChart";
import LineChart from "@/components/custom/charts/LineChart/LineChart";
import PieChart from "@/components/custom/charts/PieChart/PieChart";
import { Card } from "@/components/ui/Card/card";
import {
  barChartData,
  basicTableData,
  cardData,
  pieChartData,
} from "@/utils/constants";

const Analytics = () => {
  return (
    <div className="mt-[2rem] flex flex-col gap-[1rem]">
      <div className="grid grid-cols-3 col-span-2 gap-[1.8rem] ">
        {cardData.map((cardDataItem, index) => {
          return (
            <Card
              key={index}
              className="h-[120px]  flex flex-col gap-[0.2rem] items-center justify-center shadow-md">
              <p className="font-semibold text-lg">{cardDataItem.count}</p>
              <p className="text-foreground/70">{cardDataItem.label}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-2 py-[2rem] gap-[2rem] overflow-hidden ">
        <div className="w-full  p-[2rem] border rounded-lg ">
          <PieChart data={pieChartData} title={`Project Status`} />
        </div>
        <BasicTable {...basicTableData} />

        <div className="w-full col-span-2  p-[2rem] border rounded-lg ">
          <BarChart title={`Budget Estimation`} data={barChartData} />
        </div>
        <div className="w-full col-span-2  p-[2rem] border rounded-lg ">
          <LineChart />
        </div>
        <div className="w-full  col-span-2 p-[2rem] border rounded-lg ">
          <AreaCharts />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
