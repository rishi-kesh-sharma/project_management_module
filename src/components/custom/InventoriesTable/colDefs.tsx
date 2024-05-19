import { IProjectRowData } from "@/@types";
import Badge from "@/components/custom/Badge/Badge";
import { EditIcon, EyeIcon, TrashIcon } from "@/components/icons/commonIcons";
import { Link, useParams } from "react-router-dom";
export const colDefs = [
  {
    field: "itemName",
    headerCheckboxSelection: true,
    headerName: "Inventory Name",
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
  {
    field: "category",
    headerName: "Category",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Badge label={p.value} variant={"outline"} />
        </div>
      );
    },
  },
  {
    field: "subCategory",
    headerName: "Sub Category",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Badge label={p.value} variant={"outline"} />
        </div>
      );
    },
  },
  {
    field: "unitPrice",
  },
  {
    field: "quantity",
  },
  {
    field: "totalPrice",
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
