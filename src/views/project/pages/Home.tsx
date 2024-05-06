import { useMemo } from "react";
import PageLayout from "../../../helpers/components/common/layouts/PageLayout.tsx";
import {
  ITEM_TABLE_DATA,
  ITEM_TABLE_MEMO,
} from "../../../utils/constants/tableConstant.tsx";
import TableActions from "../../../helpers/components/common/table/TableActions.tsx";
import ViewItemTable from "../../components/tables/ViewItemTable.tsx";
import AddItemForm from "../../components/form/add/AddItemForm.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store.ts";

const HomePage = () => {
  const { isFlag } = useSelector(
    (state: RootState) => state.Retail.retail.inventory.add
  );
  // Memo for column and data
  const column = useMemo(() => ITEM_TABLE_MEMO, []);
  const columns = column[0].columns;
  const data = useMemo(() => ITEM_TABLE_DATA, []);

  // Routes for actions
  const getRoutes = (id: number) => {
    console.log(id);
    return {
      handleViewAction: () => {},

      handleEditAction: () => {},
      handleDeleteAction: () => {},
    };
  };
  const allData = data?.map((item) => ({
    ...item,
    action: <TableActions {...getRoutes(item.id)} />,
  }));

  const viewItemTableProps = { columns, data: allData };

  return (
    <div className="flex flex-col h-full w-full px-6 py-3 gap-4 scrollbar scrollbar-mt-30px overflow-y-scroll">
      <PageLayout />
      {!isFlag ? <ViewItemTable {...viewItemTableProps} /> : <AddItemForm />}
    </div>
  );
};

export default HomePage;
