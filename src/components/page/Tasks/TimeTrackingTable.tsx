import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./timeTrackingColDefs";
import TableToolbar from "@/components/custom/TableToolbar/TableToolbar";
import { ITimeTrackingRowData } from "@/@types";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const TimeTrackingTable = ({
  timeTrackings,
}: {
  timeTrackings: ITimeTrackingRowData[];
}) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="mt-[2rem]">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={`Time Tracking`}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Start Timer"
            createPagePath=""
          />
        }
        rowData={timeTrackings}
        heading={`Time Tracking`}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default TimeTrackingTable;
