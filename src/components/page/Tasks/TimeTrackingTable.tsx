import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./timeTrackingColDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { ITimeTrackingRowData } from "@/@types";
import { ProjectsTableSearch } from "@/utils/constants";
// import Timer from "@/components/custom/common/Timer/Timer";

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
      {/* <Timer /> */}

      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={`Time Tracking`}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Start Timer"
            // createPagePath=""
            hasSearch={true}
            search={<ProjectsTableSearch handleSearch={handleSearch} />}
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
