import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
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
            heading={"Human Resource"}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Assign"
            createPagePath={`/humanResource/add`}
          />
        }
        rowData={humanResource}
        heading={"Human Resources"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default HumanResourceTable;
