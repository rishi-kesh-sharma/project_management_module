import ProjectDetailTable from "./Table";

const projectDetailTabTriggers = [
  {
    id: "tasks",
    label: "Tasks",
  },
  {
    id: "planning",
    label: "Planning",
  },
  {
    id: "resources",
    label: "Resource",
  },
  {
    id: "time-tracking",
    label: "Time Tracking",
  },
];

import { useGetWorkspaceQuery } from "@/api/workspace";
import Tabs from "@/components/custom/common/Tabs/Tabs";
import { useParams } from "react-router";
const WorkspaceDetail = () => {
  const { workspaceId } = useParams();
  const { data, isLoading } = useGetWorkspaceQuery(workspaceId);
  if (!workspaceId) return "loading";

  if (isLoading || !data) return "Loading...";

  return (
    <div className="my-[2rem]">
      <Tabs
        triggers={projectDetailTabTriggers}
        contents={[
          {
            id: "tasks",
            element: <ProjectDetailTable project={data.projects} />,
          },
          {
            id: "planning",
            element: <div>Planning tab</div>,
          },
          {
            id: "resources",
            element: <div>Resources tab</div>,
          },
          {
            id: "time-tracking",
            element: <div>Time Tracking tab</div>,
          },
        ]}
      />
    </div>
  );
};

export default WorkspaceDetail;
