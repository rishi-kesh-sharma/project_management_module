import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { IWorkspace } from "@/api/workspace";
import TableToolbar from "@/components/custom/TableToolbar/TableToolbar";
import { colDefs } from "./colDefs";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const ProjectTable = ({ workspace }: { workspace: IWorkspace }) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  if (!workspace) return "loading...";
  return (
    <AgGridTable
      tableToolbar={
        <TableToolbar
          heading={workspace.workspaceName}
          handleSearch={handleSearch}
          dropdownMenus={dropdownMenus}
        />
      }
      rowData={workspace.projects}
      heading={workspace.workspaceName}
      dropdownMenus={dropdownMenus}
      colDefs={colDefs}
    />
  );
};

export default ProjectTable;
