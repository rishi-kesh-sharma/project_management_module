import WorkspaceDetailTable from "./Table";

import { useGetWorkspaceQuery } from "@/api/workspace";
import { useParams } from "react-router";
const WorkspaceDetail = () => {
  const { workspaceId } = useParams();
  const { data, isLoading } = useGetWorkspaceQuery(workspaceId);
  if (!workspaceId) return "loading";

  if (isLoading || !data) return "Loading...";
  return (
    <div className="my-[2rem]">
      <div className="flex items-end w-full ml-auto"></div>
      <WorkspaceDetailTable workspace={data} />
    </div>
  );
};

export default WorkspaceDetail;
