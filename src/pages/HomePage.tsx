import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs, rowData } from "@/components/custom/Tables/AgGridTable/data";

const Home = () => {
  <AgGridTable rowData={rowData} colDefs={colDefs} />;
};

export default Home;
