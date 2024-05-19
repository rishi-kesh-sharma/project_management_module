import { useParams } from "react-router";
import InventoriesTable from "./InventoriesTable";
import { useGetInventoriesQuery } from "@/api/inventories";
const InventoriesDetail = () => {
  const { workspaceId } = useParams();
  const { data, isLoading } = useGetInventoriesQuery();
  if (!workspaceId) return "loading";

  if (isLoading || !data) return "Loading...";

  return (
    <div className="my-[2rem]">
      <InventoriesTable inventories={data} />
    </div>
  );
};

export default InventoriesDetail;
