/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISubTaskRowData } from "@/@types";
import Tags from "@/components/custom/Tags/Tags";
import { EditIcon, TrashIcon } from "@/components/icons/commonIcons";
import { Avatar, AvatarImage } from "@/components/ui/Avatar/avatar";
import { Progress } from "@/components/ui/Progress/progress";
import { getTagVariantForValues } from "@/lib/utils";
import { users } from "@/utils/constants";
import { AvatarFallback } from "@radix-ui/react-avatar";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

export const colDefs = [
  {
    field: "subTaskName",
    headerCheckboxSelection: true,
    headerName: "Name",
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
  // { field: "createdBy", headerName: "Created By" },
  {
    field: "members",
    headerName: "Members",
    cellRenderer: () => {
      return (
        <div className="flex -space-x-2 items-center h-full ">
          {users.map((user: any) => {
            return (
              <Avatar className="h-6 w-6 cursor-pointer ">
                <AvatarImage src={user.profile_pic} />
                <AvatarFallback>{user.name.slice(0, 1)}</AvatarFallback>
              </Avatar>
            );
          })}
        </div>
      );
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

    cellRenderer: (p: { value: string; data: ISubTaskRowData }) => {
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
