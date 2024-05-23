/* eslint-disable @typescript-eslint/no-explicit-any */
import { Progress } from "@/components/ui/Progress/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table/table";
import Tags from "../Tags/Tags";

const BasicTable = <
  ICaption extends string,
  IColumn extends { id: string; label: string },
  IData,
>({
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
                  const getTagVariantForValues = (value) => {
                    switch (value) {
                      case "Pending":
                        return "red";
                      case "Not Started":
                        return "yellow";
                      case "on Progress":
                        return "default";
                      case "Completed":
                        return "green";
                      case "low":
                        return "green";
                      case "medium":
                        return "yellow";
                      case "high":
                        return "red";
                      default:
                        return "purple";
                    }
                  };
                  return (
                    <TableCell
                      key={column.id as string}
                      className="border text-sm">
                      {(() => {
                        if (column.id === "progress") {
                          return (
                            <Progress
                              className="h-3 w-[120px] "
                              value={item[column.id]}
                            />
                          );
                        } else if (
                          column.id == "priority" ||
                          column.id === "status"
                        ) {
                          return (
                            <Tags
                              value={item[column.id]}
                              variant={getTagVariantForValues(item[column.id])}
                            />
                          );
                        } else {
                          return item[column.id];
                        }
                      })()}
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
