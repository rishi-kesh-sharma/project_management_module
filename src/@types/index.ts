import { ButtonProps } from "@/components/ui/Button/button";
import { AvatarProps } from "@radix-ui/react-avatar";
import { ColDef } from "@ag-grid-community/core";

export interface IDropdownMenuItem {
  id: string | number;
  isLink: boolean;
  label: string;
  link: string;
}

export interface IDropdownMenuProps {
  menu: {
    label: string;
    items: IDropdownMenuItem[];
  };
  dropdownSize: "lg" | "md" | "sm" | "default";
  dropdownVariant: "primary" | "secondary" | "default";
  dropdownTriggerSize: ButtonProps["size"];
  dropdownTriggerVariant: ButtonProps["variant"];
}

export interface IAvatarDropdownProps {
  menu: {
    label: string;
    items: IDropdownMenuItem[];
  };
  dropdownSize: "lg" | "md" | "sm" | "default";
  dropdownVariant: "primary" | "secondary" | "default";
  avatarSize: "lg" | "md" | "sm" | "default";
  name: string;
  imgSrc?: string;
}

export interface SidebarItemProps {
  label: string;
  link: string;
  icon: React.ReactElement;
  items?: SidebarItemProps[];
}
export interface SidebarProps {
  path: string;
  items: SidebarItemProps[];
}

export interface IConfig {
  APP_NAME: string;
  LOGO: string;
}

export interface IUser {
  name: string;
  username: string;
  email: string;
}

export interface IHeaderProps {
  // user: IUser;
}

export interface IAvatarProps extends AvatarProps {
  imgSrc?: string;
  name: string;
}

export interface IRowData {
  make: string;
  model: string;
  price: number;
  electric: boolean;
  month: string;
}

export type RowModelType =
  | "infinite"
  | "viewport"
  | "clientSide"
  | "serverSide";

export type IsRowSelectable = unknown;
export interface IAgGridTableProps {
  theme:
    | "ag-theme-quartz"
    | "ag-theme-alpine"
    | "ag-theme-quartz-dark"
    | "ag-theme-quartz-alpine";
  height: number;
  rowData: IRowData[];
  colDefs: ColDef[];
  rowSelection: "multiple" | "single";
  sidebar: string | boolean;
  suppressRowClickSelection: boolean;
  pagination: boolean;
  paginationPageSize: number;
  paginationPageSizeSelector: number[];
  variant: "primary" | "secondary";
  rowBuffer: number;
  rowModelType: RowModelType;
  rowHeight: number;
  isRowSelectable: IsRowSelectable;
  rowMultiSelectWithClick: boolean;
  enableAdvanceFilter: boolean;
  suppressMenuHide: boolean;
  rowDragMultiRow: boolean;
  onGridReady: () => void;
  onCellClicked: () => void;
  onCellValueChanged: () => void;
  onFilterOpened: () => void;
  onRowSelected: () => void;
}

export interface IBadgeProps {
  label: string;
  variant: "default" | "secondary" | "destructive" | "outline";
}
