import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs, rowData } from "@/components/custom/Tables/AgGridTable/data";

const Analytics = () => {
  return (
    <div className="px-[2rem]">
      <AgGridTable rowData={rowData} colDefs={colDefs} sidebar={false} />;
    </div>
  );
};

export default Analytics;
