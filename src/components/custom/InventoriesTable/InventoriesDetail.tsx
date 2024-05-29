import { useParams } from "react-router";
import InventoriesTable from "./InventoriesTable";
import { useGetInventoriesQuery } from "@/api/inventories";
import Spinner from "../common/Loaders/Spinner/Spinner";
const InventoriesDetail = () => {
  const { workspaceId } = useParams();
  const { data, isLoading } = useGetInventoriesQuery();
  // if (!workspaceId) return "loading";
  if (isLoading || !data) return <Spinner />;

  return (
    <div className="my-[1.3rem]">
      <InventoriesTable inventories={data} />
    </div>
  );
};

export default InventoriesDetail;
