import { IProjectRowData } from "@/@types";
import Badge from "@/components/custom/Badge/Badge";
import { EditIcon, TrashIcon } from "@/components/icons/commonIcons";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: "fullName",
    headerCheckboxSelection: true,
    headerName: "Full Name",
    checkboxSelection: true,
    cellRenderer: (p: { value: string; data: IProjectRowData }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { humanResourceId } = useParams();
      return (
        <Link
          className="hover:underline"
          to={`/humanResource/${humanResourceId}`}>
          {p.value}
        </Link>
      );
    },
  },
  {
    field: "role",
    headerName: "Role",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Badge label={p.value} variant={"outline"} />
        </div>
      );
    },
  },

  {
    field: "allocatedEffort",
  },
  {
    field: "startDate",
  },
  {
    field: "endDate",
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
          <EditIcon id={p.data.id} className="text-blue-900 cursor-pointer" />
        </div>
      );
    },
  },
];
