import { ISubTaskRowData } from "@/@types";
import { EditIcon, EyeIcon, TrashIcon } from "@/components/icons/commonIcons";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: "trackingId",
    headerCheckboxSelection: true,
    headerName: "Tracking ID",
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
  {
    field: "date",
    headerName: "Date",

    cellRenderer: (p: { value: string }) => {
      return <>{moment(p.value).format()}</>;
    },
  },
  { field: "createdBy", headerName: "Created By" },
  {
    field: "startTime",
    headerName: "Start Date",

    cellRenderer: (p: { value: string }) => {
      return <>{moment(p.value).format()}</>;
    },
  },
  {
    field: "endTime",
    headerName: "End Time",
    cellRenderer: (p: { value: string }) => {
      return <>{moment(p.value).format()}</>;
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
