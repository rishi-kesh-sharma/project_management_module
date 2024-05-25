import BasicTable from "@/components/custom/common/Tables/BasicTable/BasicTable";
import AreaCharts from "@/components/custom/common/charts/AreaChart/AreaCharts";
import BarChart from "@/components/custom/common/charts/BarChart/BarChart";
import LineChart from "@/components/custom/common/charts/LineChart/LineChart";
import PieChart from "@/components/custom/common/charts/PieChart/PieChart";
import { Card } from "@/components/ui/Card/card";
import i18n from "@/intl/i18n";
import {
  barChartData,
  overdueProjectData,
  cardData,
  pieChartData,
  upcomingDeadlineData,
} from "@/utils/constants";
import CreateWorkspaceForm from "./CreateWorkspaceForm";
import {
  IOverdueProjectColumn,
  IOverdueProjectData,
  IOverdueProjectTableProps,
} from "@/@types";
import {
  IUpcomingDeadlineColumn,
  IUpcomingDeadlineData,
  IUpcomingDeadlineTableProps,
} from "@/@types";

const Analytics = () => {
  return (
    <div className=" flex flex-col gap-[1rem]">
      {/* <ThreeVerticalDots className="ml-auto" /> */}
      <CreateWorkspaceForm />
      <div className="grid grid-cols-3 col-span-2 gap-[1.8rem] ">
        {cardData.map((cardDataItem, index) => {
          return (
            <Card
              key={index}
              className=" grid px-[2rem] grid-cols-2  py-[3rem] gap-[0.2rem] place-items-center justify-center shadow-md">
              <p className="text-foreground text-xl font-semibold">
                {cardDataItem.label}
              </p>
              <p className="font-semibold text-2xl bg-primary h-16 w-16 text-white rounded-full flex items-center justify-center p-auto">
                {cardDataItem.count}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-2 py-[2rem] gap-[2rem] overflow-hidden ">
        <div className="w-full    p-[2rem] border rounded-lg ">
          <PieChart
            data={pieChartData}
            title={i18n.t(
              "component.home.text.projectStatus",
              "Project Sta   tus"
            )}
          />
        </div>
        <div className="w-full p-[2rem] border rounded-lg ">
          <AreaCharts />
        </div>
        <BasicTable<
          IUpcomingDeadlineTableProps["tableCaption"],
          IUpcomingDeadlineColumn,
          IUpcomingDeadlineData
        >
          {...upcomingDeadlineData}
        />
        <BasicTable<
          IOverdueProjectTableProps["tableCaption"],
          IOverdueProjectColumn,
          IOverdueProjectData
        >
          {...overdueProjectData}
        />

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
      </div>
    </div>
  );
};

export default Analytics;
