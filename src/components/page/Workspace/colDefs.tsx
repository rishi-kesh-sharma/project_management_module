import Badge from "@/components/custom/Badge/Badge";
import { EditIcon, EyeIcon, TrashIcon } from "@/components/icons/commonIcons";
import moment from "moment";
export const colDefs = [
  {
    field: "projectName",
    headerCheckboxSelection: true,
    headerName: "Project Name",
    checkboxSelection: true,
  },
  { field: "createdBy", headerName: "Created By" },
  {
    field: "startDate",
    headerName: "Start Date",

    cellRenderer: (p: { value: string }) => {
      return <>{moment(p.value).fromNow()}</>;
    },
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    cellRenderer: (p: { value: string }) => {
      return <>{moment(p.value).fromNow()}</>;
    },
  },
  {
    field: "status",
    headerName: "Status",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Badge label={p.value} variant={"outline"} />
        </div>
      );
    },
  },
  {
    field: "priority",
    headerName: "Priority",

    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Badge label={p.value} variant={"outline"} />
        </div>
      );
    },
  },
  {
    field: "Actions",
    editable: false,
    floatingFilter: false,
    filter: false,
    enablePivot: false,
    headerCheckboxSelection: false,

    cellRenderer: (p: { value: string }) => {
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon className="text-destructive cursor-pointer" />
          <EditIcon className="text-blue-900 cursor-pointer" />
          <EyeIcon className="text-black-900 cursor-pointer" />
        </div>
      );
    },
  },
];
