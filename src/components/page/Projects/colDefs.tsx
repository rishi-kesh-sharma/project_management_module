import { IProjectRowData } from "@/@types";
import Badge from "@/components/custom/Badge/Badge";
import Tags from "@/components/custom/Tags/Tags";
import { EditIcon, TrashIcon } from "@/components/icons/commonIcons";
import { Progress } from "@/components/ui/Progress/progress";
import { getTagVariantForValues } from "@/lib/utils";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: "taskName",
    headerCheckboxSelection: true,
    headerName: "Task Name",
    checkboxSelection: true,
    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { workspaceId, projectId } = useParams();
      return (
        <Link
          className="hover:underline"
          to={`/workspace/${workspaceId}/project/${projectId}/task/${p.data.id}`}>
          {p.value}
        </Link>
      );
    },
  },
  // { field: "createdBy", headerName: "Created By" },
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
    field: "progress",
    cellRenderer: (p: { value: number }) => {
      return (
        <div className="flex items-center h-full">
          <Progress className="h-3 w-[120px] " value={p.value || 50} />
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Tags value={p.value} variant={getTagVariantForValues(p.value)} />
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
          <Tags value={p.value} variant={getTagVariantForValues(p.value)} />
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

    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            id={p.data.id}
            className="text-destructive cursor-pointer"
          />
            <EditIcon
            id={p.data.id}
            className="text-primary text-lg cursor-pointer"
          />
        </div>
      );
    },
  },
];
