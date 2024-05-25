import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "../Tasks/colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { ITaskRowData } from "@/@types";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const TaskTable = ({ task }: { task: ITaskRowData }) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  if (!task) return "loading...";
  return (
    <div className="mt-[2rem]">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={task.taskName}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Task"
            createPagePath="/workspace/:workspaceId/task/:taskId/task/create"
          />
        }
        rowData={task.subTasks}
        heading={task.taskName}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default TaskTable;
