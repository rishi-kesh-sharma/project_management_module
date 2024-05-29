import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { IWorkspace } from "@/api/workspace";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { colDefs } from "./colDefs";
import { useParams } from "react-router";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import { ProjectsTableSearch } from "@/utils/constants";

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
  if (!workspace) return <Spinner />;
  return (
    <AgGridTable
      tableToolbar={
        <TableToolbar
          hasSearch={true}
          search={<ProjectsTableSearch handleSearch={handleSearch} />}
          heading={workspace.workspaceName || "Workspace"}
          handleSearch={handleSearch}
          hasFilters={false}
          dropdownMenus={dropdownMenus}
          createPagePath={`/workspace/${workspaceId}/project/create`}
          createButtonText={"Project"}
          hasArchive={true}
          hasBookmark={true}
          hasNotification={true}
        />
      }
      rowData={workspace.projects}
      heading={workspace.workspaceName}
      dropdownMenus={dropdownMenus}
      colDefs={colDefs}
      sidebar={true}
    />
  );
};

export default ProjectTable;
