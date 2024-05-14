import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs, rowData } from "@/components/custom/Tables/AgGridTable/data";

const Projects = () => {
  return (
    <div className="px-[2rem]">
      <AgGridTable rowData={rowData} colDefs={colDefs} />;
    </div>
  );
};

export default Projects;
