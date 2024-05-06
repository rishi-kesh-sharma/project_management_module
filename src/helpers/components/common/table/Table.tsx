import { CommonTableSchema } from "./TableSchema.tsx";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Table(props: CommonTableSchema) {
  // Props
  const {
    currentTable,
    getTableProps,
    getTableBodyProps,
    renderHead,
    renderBody,
  } = props;
  return (
    <div className="w-full  max-h-[calc(100vh-300px)] border-[1px] border-[#C7C7C7]  rounded-lg scrollbar scrollbar-mt-30px overflow-y-scroll">
      <table
        ref={currentTable}
        className="w-full table-fixed"
        {...getTableProps()}
      >
        <thead className="sticky text-left top-0 w-full bg-[#F1F1F1]">
          {renderHead}
        </thead>
        <tbody {...getTableBodyProps()}>{renderBody}</tbody>
      </table>
    </div>
  );
}
