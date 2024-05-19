import AgGridTable from "@/components/custom/Tables/AgGridTable/AgGridTable";
import { colDefs } from "../Projects/colDefs";
import TableToolbar from "@/components/custom/TableToolbar/TableToolbar";
import { IProjectRowData } from "@/@types";
import { useParams } from "react-router";
import { useCallback, useEffect, useState } from "react";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const ProjectTable = ({
  project: projects,
}: {
  project: IProjectRowData[];
}) => {
  const [project, setProject] = useState<IProjectRowData>();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const { projectId } = useParams();

  const getProject = useCallback(
    (id: string) => {
      return projects.find((item) => {
        return item.id === id;
      });
    },
    [projects]
  );

  useEffect(() => {
    if (projectId) setProject(getProject(projectId));
  }, [project, projectId, getProject]);

  if (projectId) getProject(projectId);
  if (!project) return "loading...";
  return (
    <div className="mt-[2rem]">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            heading={project.projectName}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Task"
            createPagePath="/workspace/:workspaceId/project/:projectId/task/create"
          />
        }
        rowData={project.tasks}
        heading={project.projectName}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default ProjectTable;
