/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProjectRowData } from "@/@types";
import Badge from "@/components/custom/Badge/Badge";
import { EditIcon, TrashIcon } from "@/components/icons/commonIcons";
import { Link, useParams } from "react-router-dom";
import Tags from "../Tags/Tags";
import { getTagVariantForValues } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { users } from "@/utils/constants";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/Avatar/avatar";
export const colDefs = [
  {
    field: "fullName",
    headerCheckboxSelection: true,
    headerName: "Full Name",
    minWidth: 220,
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
    field: "members",
    headerName: "Avatar",
    maxWidth: 120,
    cellRenderer: () => {
      return (
        <div className="flex  items-center h-full ">
          {users.slice(0, 1).map((user: any) => {
            return (
              <Avatar className="h-8 w-8 cursor-pointer ">
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
    field: "role",
    headerName: "Job Title",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Tags
            className="py-1"
            value={p.value}
            variant={faker.helpers.arrayElement([
              "dark",
              "indigo",
              "purple",
              "red",
              "green",
              "pink",
              "yellow",
              "primary",
              "dark",
            ])}
          />
        </div>
      );
    },
  },

  // {
  //   field: "allocatedEffort",
  // },
  {
    field: "department",
    headerName: "Department",
    cellRenderer: (p: { value: string }) => {
      return (
        <div>
          <Tags
            className="py-1"
            value={faker.helpers.arrayElement([
              "Sales",
              "Marketing",
              "Development",
              "Management",
            ])}
            variant={faker.helpers.arrayElement([
              "dark",
              "indigo",
              "purple",
              "red",
              "green",
              "pink",
              "yellow",
              "primary",
              "dark",
            ])}
          />
        </div>
      );
    },
  },
  {
    field: "startDate",
    cellRenderer: (p: { value: Date }) => {
      return moment(p.value).fromNow();
    },
  },
  {
    field: "endDate",
    cellRenderer: (p: { value: Date }) => {
      return moment(p.value).fromNow();
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
