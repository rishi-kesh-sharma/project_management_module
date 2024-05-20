import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/TableToolbar/TableToolbar";
import { IInventoriesRowData } from "@/@types";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const InventoriesTable = ({
  inventories,
}: {
  inventories: IInventoriesRowData[];
}) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  console.log(inventories, "inventories");
  // if (!inventories) return "loading...";
  return (
    <div className="mt-[2rem]">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={"Inventories"}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Inventory"
            createPagePath={`/inventory/create`}
          />
        }
        rowData={inventories}
        heading={"Inventories"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default InventoriesTable;
