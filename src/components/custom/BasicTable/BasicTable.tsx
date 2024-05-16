import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table/table";

export default function BasicTable({ tableCaption, columns, data }) {
  return (
    <div className="flex flex-col items-center rounded-lg">
      <h2 className="font-semibold text-lg border w-full py-[1rem] px-[2rem] rounded-t-lg">
        {tableCaption}
      </h2>
      <Table className="border rounded-lg">
        {/* <TableCaption>{tableCaption}</TableCaption> */}
        <TableHeader className="">
          <TableRow className="">
            {columns.map((column) => {
              return <TableHead className="border">{column.label}</TableHead>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {data.map((item) => {
            return (
              <TableRow className="">
                {columns.map((column) => {
                  return (
                    <TableCell className="border">{item[column.id]}</TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
