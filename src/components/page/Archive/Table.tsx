import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/TableToolbar/TableToolbar";
import { IBookmarkRowData } from "@/@types";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const BookmarkTable = ({ tasks }: { tasks: IBookmarkRowData[] }) => {
  const handleSearch = () => {};
  return (
    <div className="mt-[2rem]">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={`Tasks`}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            // createButtonText={null}
            // createPagePath="/workspace/:workspaceId/bookmark/:bookmarkId/task/create"
          />
        }
        rowData={tasks}
        heading={`Tasks`}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default BookmarkTable;
