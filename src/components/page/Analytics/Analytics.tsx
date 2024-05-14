import AreaCharts from "@/components/custom/charts/AreaChart/AreaCharts";
import BarChart from "@/components/custom/charts/BarChart/BarChart";
import LineChart from "@/components/custom/charts/LineChart/LineChart";
import PieChart from "@/components/custom/charts/PieChart/PieChart";

const Analytics = () => {
  return (
    <div className="grid grid-cols-2 py-[2rem] gap-[2rem] overflow-hidden ">
      {/* <AgGridTable rowData={rowData} colDefs={colDefs} sidebar={false} />; */}
      <div className="">
        <AreaCharts />
      </div>
      <div className="w-full h-[300px] ml-[3rem] ">
        <PieChart />
      </div>

      <div className="">
        <LineChart />
      </div>
      <div className="ml-[3rem]">
        <BarChart />
      </div>
    </div>
  );
};

export default Analytics;
