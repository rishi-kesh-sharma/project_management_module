/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table/table";

const BasicTable = <ICaption extends string, IColumn, IData>({
  tableCaption,
  columns,
  data,
}: {
  tableCaption: ICaption;
  columns: IColumn[];
  data: IData[];
}) => {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <h2 className="font-semibold text-lg border w-full py-[1rem] px-[2rem] rounded-t-lg">
        {tableCaption}
      </h2>
      <Table className="border rounded-lg">
        {/* <TableCaption>{tableCaption}</TableCaption> */}
        <TableHeader className="">
          <TableRow className="">
            {columns.map((column: IColumn) => {
              return <TableHead className="border">{column.label}</TableHead>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.map((item: IData) => {
            return (
              <TableRow className="">
                {columns.map((column: IColumn) => {
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
