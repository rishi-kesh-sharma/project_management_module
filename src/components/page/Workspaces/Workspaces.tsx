import { useGetWorkspacesQuery } from "@/api/workspace";
import Cards from "@/components/page/Workspaces/Cards";
const Workspaces = () => {
  const { data, isLoading } = useGetWorkspacesQuery("");
  console.log(data, "data");
  return (
    <div className="mt-[5rem] ml-[2rem]">
      <Cards data={data} />
    </div>
  );
};

export default Workspaces;
