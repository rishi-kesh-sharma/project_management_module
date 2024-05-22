import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { IWorkspace } from "@/api/workspace";
import TableToolbar from "@/components/custom/TableToolbar/TableToolbar";
import { colDefs } from "./colDefs";
import { useParams } from "react-router";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const ProjectTable = ({ workspace }: { workspace: IWorkspace }) => {
  const { workspaceId } = useParams();
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
          createPagePath={`/workspace/${workspaceId}/project/create`}
          createButtonText={"Project"}
          hasArchive={true}
          hasBookmark={true}
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
