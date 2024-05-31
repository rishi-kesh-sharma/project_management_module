import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { IHumanResourceRowData } from "@/@types";
import { ProjectsTableSearch } from "@/utils/constants";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const HumanResourceTable = ({ data }: { data: IHumanResourceRowData[] }) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // if (!humanResource) return "loading...";
  return (
    <div className="">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={"Human Resource"}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Assign"
            createPagePath={`/humanResource/add`}
            hasSearch={true}
            search={<ProjectsTableSearch handleSearch={handleSearch} />}
          />
        }
        rowData={data}
        heading={"Human Resources"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default HumanResourceTable;
