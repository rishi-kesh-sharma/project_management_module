import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { IEquipmentRowData } from "@/@types";
import { ProjectsTableSearch } from "@/utils/constants";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const EquipmentTable = ({
  equipments,
}: {
  equipments: IEquipmentRowData[];
}) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // if (!equipment) return "loading...";
  return (
    <div className="">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={"Equipment"}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Equipment"
            createPagePath={`/equipment/create`}
            hasSearch={true}
            search={<ProjectsTableSearch handleSearch={handleSearch} />}
          />
        }
        rowData={equipments}
        heading={"Equipment"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default EquipmentTable;
