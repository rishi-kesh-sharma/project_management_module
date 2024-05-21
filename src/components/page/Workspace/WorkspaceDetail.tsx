import WorkspaceDetailTable from "./Table";

import { useGetWorkspaceQuery } from "@/api/workspace";
import Spinner from "@/components/custom/common/Spinner/Spinner";
import { useParams } from "react-router";
const WorkspaceDetail = () => {
  const { workspaceId } = useParams();
  const { data, isLoading } = useGetWorkspaceQuery(workspaceId);
  if (!workspaceId) return "loading";

  if (isLoading || !data) return <Spinner/>;
  return (
    <div className="mb-[2rem]">
      <div className="flex items-end w-full ml-auto"></div>
      <WorkspaceDetailTable workspace={data} />
    </div>
  );
};

export default WorkspaceDetail;
