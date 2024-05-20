import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/TableToolbar/TableToolbar";
import { IBudgetRowData } from "@/@types";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const BudgetTable = ({ budgets }: { budgets: IBudgetRowData[] }) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // if (!budget) return "loading...";
  return (
    <div className="mt-[2rem]">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={"Budget"}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Budget"
            createPagePath={`/budget/create`}
          />
        }
        rowData={budgets}
        heading={"Budget"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default BudgetTable;
