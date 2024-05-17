import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import { IWorkspace } from "@/api/workspace";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const WorkspaceDetailTable = ({ workspace }: { workspace: IWorkspace }) => {
  if (!workspace) return "loading...";
  return (
    <AgGridTable
      rowData={workspace.projects}
      heading={workspace.workspaceName}
      dropdownMenus={dropdownMenus}
      colDefs={colDefs}
    />
  );
};

export default WorkspaceDetailTable;
