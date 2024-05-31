import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "../Projects/colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { useParams } from "react-router";
import { ProjectsTableFilters, ProjectsTableSearch } from "@/utils/constants";
import { useGetTasksQuery } from "@/api/task";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const ProjectTable = () => {
  const { workspaceId, projectId } = useParams();
  const { data, isLoading, isError } = useGetTasksQuery();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  // if (isLoading) return <Spinner />;
  if (isError) return <div>Error Occurred</div>;
  return (
    <div className="mt-[1rem]">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            hasFilters={false}
            filters={<ProjectsTableFilters />}
            hasSearch={true}
            search={<ProjectsTableSearch handleSearch={handleSearch} />}
            heading={"Tasks"}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Task"
            createPagePath={`/workspace/${workspaceId}/project/${projectId}/task/create`}
            hasArchive={true}
            hasBookmark={true}
            hasNotification={true}
          />
        }
        rowData={data}
        heading={"Tasks"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
        sidebar={true}
      />
    </div>
  );
};

export default ProjectTable;
