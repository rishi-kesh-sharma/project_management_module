/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Delete, Edit, View } from "../../../../helpers/assets/img/index.ts";
import CustomImage from "../images/CustomImage.tsx";
import IconButton from "../buttons/IconButton.tsx";

export type TableActionsSchema = {
  handleViewAction: () => void;
  handleEditAction: (id: number) => void;
  handleDeleteAction: () => void;
};

const iconActions = ({
  handleViewAction,
  handleEditAction,
  handleDeleteAction,
}: any) => [
  {
    css: {},
    icon: (
      <CustomImage
        src={View}
        css={{ divCss: "w-3", imgCss: "text-2xl " }}
        alt={View}
      />
    ),
    handleAction: handleViewAction,
  },
  {
    css: {},
    icon: <CustomImage src={Edit} css={{ divCss: "w-3" }} alt={Edit} />,
    handleAction: handleEditAction,
  },
  {
    css: {},
    icon: <CustomImage src={Delete} css={{ divCss: "w-3" }} alt={Delete} />,
    handleAction: handleDeleteAction,
  },
];

export default function TableActions(props: TableActionsSchema) {
  return (
    <div className="flex gap-2 ">
      {iconActions({ ...props }).map((item: any, idx: number) => (
        <IconButton key={`${idx}. TableAction IconButton`} {...item} />
      ))}
    </div>
  );
}
