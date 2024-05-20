import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/TableToolbar/TableToolbar";
import { IHumanResourceRowData } from "@/@types";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const HumanResourceTable = ({
  humanResource,
}: {
  humanResource: IHumanResourceRowData[];
}) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  console.log(humanResource, "humanResource");
  // if (!humanResource) return "loading...";
  return (
    <div className="mt-[2rem]">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={"HumanResource"}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Add"
            createPagePath={`/humanResource/add`}
          />
        }
        rowData={humanResource}
        heading={"HumanResource"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default HumanResourceTable;
