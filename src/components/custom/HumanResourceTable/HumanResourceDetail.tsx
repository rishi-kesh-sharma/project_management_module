import Spinner from "../common/Spinner/Spinner";
import HumanResourceTable from "./HumanResourceTable";
import { useGetHumanResourcesQuery } from "@/api/humanResource";
const HumanResourceDetail = () => {
  const { data, isLoading } = useGetHumanResourcesQuery();

  if (isLoading || !data) return <Spinner/>;

  return (
    <div className="my-[2rem]">
      <HumanResourceTable humanResource={data} />
    </div>
  );
};

export default HumanResourceDetail;
