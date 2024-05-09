import { ButtonProps } from "@/components/ui/Button/button";
import { AvatarProps } from "@radix-ui/react-avatar";

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
  dropdownTriggerSize: "lg" | "md" | "sm" | "default";
  dropdownTriggerVariant: "primary" | "secondary" | "default";
  dropdownTriggerButtonProps: ButtonProps;
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
  imgSrc: string;
}

export interface SidebarItemProps {
  label: string;
  link: string;
  icon: React.ReactElement;
  items?: SidebarItemProps[];
}
export interface SidebarProps {
  type: "small" | "large";
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
  user: IUser;
}

export interface IAvatarProps extends AvatarProps {
  imgSrc: string;
  name: string;
}

export interface IAgGridTableProps {
  theme:
    | "ag-theme-quartz"
    | "ag-theme-alpine"
    | "ag-theme-quartz-dark"
    | "ag-theme-quartz-alpine";
  height: number;
  rowData: unknown;
  columnDefs: ColDef[];
  rowSelection: "multiple" | "single";
  suppressRowClickSelection: boolean;
  pagination: boolean;
  paginationPageSize: number;
  paginationPageSizeSelector: number[];
  variant: "primary" | "secondary";
  onGridReady: () => void;
}