import {
  renderItemTableBody,
  renderItemTableHead,
} from "../../../utils/methods/itemProps.tsx";
import Pagination from "../../../helpers/components/common/table/Pagination.tsx";
import Table from "../../../helpers/components/common/table/Table.tsx";
import { useFilters, useSortBy, useTable } from "react-table";
import { useRef } from "react";

// Define your data interface
interface Row {
  id: number;
  item_name: string;
  category: string;
  stock: string;
  selling_price: string;
  expiry_date: string;
}

// Define your columns interface (optional)
interface Column {
  Header: string;
  accessor: keyof Row;
}

interface Props {
  columns: Column[];
  data: Row[];
}
const ViewItemTable = ({ columns, data }: Props) => {
  // Ref
  const currentTable = useRef<HTMLTableElement | null>(null);

  // Actions
  const handleHeaderClick = (column: any) => {
    alert(column.Header);
  };
  // Handle page count
  const handlePageClick = () => {};

  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useFilters, useSortBy);

  // Table props
  const tableProps = {
    currentTable,
    getTableProps,
    getTableBodyProps,
    renderHead: renderItemTableHead({
      headerGroups,
      handleHeaderClick,
    }),
    renderBody: renderItemTableBody({ rows, prepareRow, getTableBodyProps }),
  };

  // Pagination props
  const paginateProps = {
    // isLoading,
    currentPage: 0,
    paginationCount: 5,
    handlePageClick,
    css: {},
  };
  return (
    <div className="w-full h-full flex flex-col text-xs font-medium gap-2">
      <Table {...tableProps} />
      <Pagination {...paginateProps} />
    </div>
  );
};

export default ViewItemTable;
