import BasicTable from "@/components/custom/BasicTable/BasicTable";
import AreaCharts from "@/components/custom/charts/AreaChart/AreaCharts";
import BarChart from "@/components/custom/charts/BarChart/BarChart";
import LineChart from "@/components/custom/charts/LineChart/LineChart";
import PieChart from "@/components/custom/charts/PieChart/PieChart";
import { PlusIcon, ThreeVerticalDots } from "@/components/icons/commonIcons";
import { Button } from "@/components/ui/Button/button";
import { Card } from "@/components/ui/Card/card";
import i18n from "@/intl/i18n";
import {
  barChartData,
  basicTableData,
  cardData,
  pieChartData,
} from "@/utils/constants";
import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <div className=" flex flex-col gap-[1rem]">
      <ThreeVerticalDots className="ml-auto" />
      <Button type="button" className="flex gap-1 ml-auto" size={"sm"}>
        <Link
          to={"/workspace/create"}
          className="flex gap-2 items-center justify-end">
          <PlusIcon />
          {/* {i18n.t(`component.button.create`)} */}
          {` Workspace`}
        </Link>
      </Button>

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
          <PieChart
            data={pieChartData}
            title={i18n.t(
              "component.home.text.projectStatus",
              "Project Sta   tus"
            )}
          />
        </div>
        <BasicTable {...basicTableData} />

        <div className="w-full col-span-2  p-[2rem] border rounded-lg ">
          <BarChart
            title={i18n.t(
              "component.home.text.budgetEstimation",
              "Budget Estimation"
            )}
            data={barChartData}
          />
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
