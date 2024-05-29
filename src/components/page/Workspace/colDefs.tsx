import { IWorkspaceRowData } from "@/@types";
import ProgressBar from "@/components/custom/common/ProgressBar/ProgressBar";
import Tags from "@/components/custom/common/Tags/Tags";
import {
  EditIcon,
  TrashIcon,
} from "@/components/custom/common/icons/commonIcons";
import { Progress } from "@/components/ui/Progress/progress";
import { getTagVariantForValues } from "@/lib/utils";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: "projectName",
    headerCheckboxSelection: true,
    headerName: "Project Name",
    checkboxSelection: true,
    cellRenderer: (p: { value: string; data: IWorkspaceRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { workspaceId } = useParams();
      return (
        <Link
          className="hover:underline"
          to={`/workspace/${workspaceId}/project/${p.data.id}`}>
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
          <ProgressBar
            className="w-full"
            value={p.value || 50}
            showValue={true}
          />
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

    cellRenderer: (p: { value: string; data: IWorkspaceRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { workspaceId } = useParams();
      return (
        <div className="flex gap-4 items-center justify-start  h-full">
          <TrashIcon
            id={p.data.id}
            className="text-destructive cursor-pointer"
          />
          <Link to={`/workspace/${workspaceId}/project/${p.data.id}/update`}>
            <EditIcon
              id={p.data.id}
              className="text-primary font-bold text-lg cursor-pointer"
            />
          </Link>
        </div>
      );
    },
  },
];
