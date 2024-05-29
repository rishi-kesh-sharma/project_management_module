import { useGetWorkspacesQuery } from "@/api/workspace";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import Cards from "@/components/page/Workspaces/Cards";
const Workspaces = () => {
  const { data, isLoading } = useGetWorkspacesQuery("");
  if (!data)
    return (
      <div className="h-screen w-full ">
        <Spinner />
      </div>
    );
  return (
    <div className="mt-[5rem] ml-[2rem]">
      <Cards data={[null, ...data]} />
    </div>
  );
};

export default Workspaces;
