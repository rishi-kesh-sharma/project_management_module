import { IProjectRowData } from "@/@types";
import { EditIcon, EyeIcon, TrashIcon } from "@/components/icons/commonIcons";
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
      const { budgetId } = useParams();
      return (
        <Link className="hover:underline" to={`/budget/${budgetId}`}>
          {p.value}
        </Link>
      );
    },
  },

  {
    field: "totalBudget",
  },
  {
    field: "lastUsed",
    cellRenderer: (p: { value: string }) => {
      return <>{moment(p.value).fromNow()}</>;
    },
  },
  {
    field: "budgetSpent",
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
          <EyeIcon id={p.data.id} className="text-black-900 cursor-pointer" />
        </div>
      );
    },
  },
];
