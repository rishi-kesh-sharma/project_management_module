import { ISubTaskRowData } from "@/@types";
import Badge from "@/components/custom/Badge/Badge";
import { EditIcon, EyeIcon, TrashIcon } from "@/components/icons/commonIcons";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: "subTaskName",
    headerCheckboxSelection: true,
    headerName: "Sub Task Name",
    checkboxSelection: true,
    cellRenderer: (p: { value: string; data: ISubTaskRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { workspaceId, projectId, taskId } = useParams();
      return (
        <Link
          className="hover:underline"
          to={`/workspace/${workspaceId}/project/${projectId}/task/${taskId}/subTask/${p.data.id}`}>
          {p.value}
        </Link>
      );
    },
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

    cellRenderer: (p: { value: string; data: ISubTaskRowData }) => {
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            id={p.data.id}
            className="text-destructive cursor-pointer"
          />
          <EditIcon id={p.data.id} className="text-blue-900 cursor-pointer" />
          <EyeIcon id={p.data.id} className="text-black-900 cursor-pointer" />
        </div>
      );
    },
  },
];
