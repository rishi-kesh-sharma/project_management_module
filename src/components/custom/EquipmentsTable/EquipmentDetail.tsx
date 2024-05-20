import EquipmentsTable from "./EquipmentTable";
import { useGetEquipmentsQuery } from "@/api/equipments";
const EquipmentsDetail = () => {
  const { data, isLoading } = useGetEquipmentsQuery();

  if (isLoading || !data) return "Loading...";

  return (
    <div className="my-[2rem]">
      <EquipmentsTable equipments={data} />
    </div>
  );
};

export default EquipmentsDetail;
