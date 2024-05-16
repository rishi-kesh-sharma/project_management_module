import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";

const dropdownMenus = {
  label: "Actions",
  items: [
    { id: 1, isLink: false, label: "Export CSV" },
    { id: 2, isLink: false, label: "Export XLSX" },
    { id: 3, isLink: false, label: "Send Email" },
  ],
};

const WorkspaceDetailTable = ({ workspace }: { workspace: any }) => {
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
