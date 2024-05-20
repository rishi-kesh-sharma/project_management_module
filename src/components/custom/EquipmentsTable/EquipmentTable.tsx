import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/TableToolbar/TableToolbar";
import { IEquipmentRowData } from "@/@types";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const EquipmentTable = ({ equipments }: { equipments: IEquipmentRowData[] }) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // if (!equipment) return "loading...";
  return (
    <div className="mt-[2rem]">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={"Equipment"}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Equipment"
            createPagePath={`/equipment/create`}
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
