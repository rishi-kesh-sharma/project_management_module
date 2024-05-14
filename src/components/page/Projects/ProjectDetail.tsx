import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs, rowData } from "@/components/custom/Tables/AgGridTable/data";

const ProjectDetail = () => {
  return (
    <div className="">
      <AgGridTable rowData={rowData} colDefs={colDefs} />;
    </div>
  );
};

export default ProjectDetail;
