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
} from "@/data";
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
import WidgetWrapper from "@/components/custom/common/WidgetWrapper/WidgetWrapper";

const Analytics = () => {
  return (
    <div className=" flex flex-col gap-[1rem]">
      {/* <ThreeVerticalDots className="ml-auto" /> */}
      <CreateWorkspaceForm />
      <div className="grid grid-cols-3 col-span-2 gap-[1.8rem] ">
        {cardData.map((cardDataItem, index) => {
          return (
            <WidgetWrapper>
              <Card
                key={index}
                className=" grid px-[2rem] grid-cols-2  py-[2rem] gap-[0.2rem] place-items-center justify-center shadow-md"
              >
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-3xl  h-16 w-16 text-foreground rounded-full flex items-center justify-center p-auto">
                    {cardDataItem.count}
                  </p>
                  <p className=" text-foreground/60 ">{cardDataItem.label}</p>
                </div>
                <div className="text-5xl  text-primary h-20 w-20 rounded-full text-center flex items-center justify-center">
                  {cardDataItem.icon}
                </div>
              </Card>
            </WidgetWrapper>
          );
        })}
      </div>
      <div className="grid grid-cols-2 py-[2rem] gap-[2rem] overflow-hidden ">
        <WidgetWrapper>
          <div className="w-full    p-[2rem] border rounded-lg ">
            <PieChart
              data={pieChartData}
              title={i18n.t(
                "component.home.text.projectStatus",
                "Project Status"
              )}
            />
          </div>
        </WidgetWrapper>
        <WidgetWrapper>
          <div className="w-full p-[2rem] border rounded-lg ">
            <AreaCharts />
          </div>
        </WidgetWrapper>
        <WidgetWrapper>
          <BasicTable<
            IUpcomingDeadlineTableProps["tableCaption"],
            IUpcomingDeadlineColumn,
            IUpcomingDeadlineData
          >
            {...upcomingDeadlineData}
          />
        </WidgetWrapper>
        <WidgetWrapper>
          <BasicTable<
            IOverdueProjectTableProps["tableCaption"],
            IOverdueProjectColumn,
            IOverdueProjectData
          >
            {...overdueProjectData}
          />
        </WidgetWrapper>

        <WidgetWrapper>
          <div className="w-full col-span-2  p-[2rem] border rounded-lg ">
            <BarChart
              title={i18n.t(
                "component.home.text.budgetEstimation",
                "Budget Estimation"
              )}
              data={barChartData}
            />
          </div>
        </WidgetWrapper>

        <WidgetWrapper>
          <div className="w-full col-span-2  p-[2rem] border rounded-lg ">
            <LineChart />
          </div>
        </WidgetWrapper>
      </div>
    </div>
  );
};

export default Analytics;
