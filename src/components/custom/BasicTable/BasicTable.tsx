import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table/table";

interface TableRow<T extends { id: string | number }> {
  data: T;
}
interface TableColumn<T> {
  label: string;
  id: keyof T;
}

type TableProps<T extends { id: string | number }> = {
  data: T[];
  tableCaption: string;
  columns: TableColumn<T>[];
};
const BasicTable = <T extends { id: string | number }>({
  data,
  tableCaption,
  columns,
}: TableProps<T>) => {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <h2 className="font-semibold text-lg border w-full py-[1rem] px-[2rem] rounded-t-lg">
        {tableCaption}
      </h2>
      <Table className="border rounded-lg">
        {/* <TableCaption>{tableCaption}</TableCaption> */}
        <TableHeader className="">
          <TableRow className="">
            {columns.map((column: TableColumn<T>) => {
              return <TableHead className="border">{column.label}</TableHead>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.map((item: T) => {
            return (
              <TableRow className="">
                {columns.map((column) => {
                  return (
                    <TableCell key={column.id as string} className="border">
                      {item[column.id] as string}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default BasicTable;
