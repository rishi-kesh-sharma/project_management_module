import { useGetBookmarksQuery } from "@/api/bookmark";
import Spinner from "@/components/custom/common/Loaders/Spinner/Spinner";
import Cards from "@/components/page/Archives/Cards";
const Archives = () => {
  const { data, isLoading } = useGetBookmarksQuery();

  if (isLoading || !data) return <Spinner />;
  console.log(data, "data");
  return (
    <div className="mt-[5rem] mb-[2rem] ml-[2rem]">
      <Cards data={data} />
    </div>
  );
};

export default Archives;
