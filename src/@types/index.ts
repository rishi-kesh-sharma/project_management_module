import { ButtonProps } from "@/components/ui/Button/button";
import { AvatarProps } from "@radix-ui/react-avatar";
import { ColDef } from "@ag-grid-community/core";
import { ClassProp } from "class-variance-authority/dist/types";

export interface IDropdownMenuItem {
  id: string;
  isLink: boolean;
  label: string;
  link?: string;
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
  className?: string;
  onSelect?: (e: Event) => void;
}
export interface ICheckboxDropdownMenuProps {
  menu: {
    label: string;
    items: IDropdownMenuItem[];
  };
  dropdownSize: "lg" | "md" | "sm" | "default";
  dropdownVariant: "primary" | "secondary" | "default";
  dropdownTriggerSize: ButtonProps["size"];
  dropdownTriggerVariant: ButtonProps["variant"];
  className?: string;
  icon?: React.ReactNode;
  onSelect?: (e: Event) => void;
}

export interface IIconDropdownMenuProps {
  menu: {
    items: IDropdownMenuItem[];
  };
  dropdownSize?: "lg" | "md" | "sm" | "default";
  dropdownVariant?: "primary" | "secondary" | "default";
  icon: React.ReactNode;
}

export interface IAvatarDropdownProps {
  menu: {
    // label: string;
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
  icon?: React.ReactElement;
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

export interface IInventories {
  id: string;
  itemName: string;
  category: string;
  subCategory: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}
export interface IEquipment {
  id: string;
  equipmentName: string;
  category: string;
  status: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface IBudget {
  id: string;
  taskName: string;
  totalBudget: number;
  lastUsed: Date;
  budgetSpent: number;
}

export interface IHumanResource {
  id: string;
  fullName: string;
  username: string;
  email: string;
  lastName: string;
  sex: "male" | "female" | "other";
  role: "frontend" | "backend" | "QA" | "Project Manager";
  allocatedEffort: number;
  startDate: Date;
  endDate: Date;
}
export interface IBookmark {
  id: string;
  projectName: string;
  createdBy: string;
  startDate: string;
  dueDate: string;
  status: string;
  priority: string;
  assignee: string;
  tasks: ITaskRowData[];
}

export interface IAvatarProps extends AvatarProps {
  imgSrc?: string;
  name: string;
}

export interface IRowData {
  id?: string;
  make: string;
  model: string;
  price: number;
  electric: boolean;
  month: string;
}

export interface IWorkspaceRowData {
  id: string;
  projectName: string;
  createdBy: string;
  startDate: string;
  dueDate: string;
  status: string;
  priority: string;
}

export interface ISubTaskRowData {
  id: string;
  projectName: string;
  createdBy: string;
  startDate: string;
  dueDate: string;
  status: string;
  priority: string;
  assignee: string;
}
export interface ITaskRowData {
  id: string;
  projectName: string;
  createdBy: string;
  startDate: string;
  dueDate: string;
  status: string;
  priority: string;
  assignee: string;
  subTasks: ISubTaskRowData[];
}

export interface IProjectRowData {
  id: string;
  projectName: string;
  createdBy: string;
  startDate: string;
  dueDate: string;
  status: string;
  priority: string;
  assignee: string;
  tasks: ITaskRowData[];
}
export interface IBookmarkRowData {
  id: string;
  projectName: string;
  createdBy: string;
  startDate: string;
  dueDate: string;
  status: string;
  priority: string;
  assignee: string;
  tasks: ITaskRowData[];
}

export interface IInventoriesRowData {
  id: string;
  itemName: string;
  category: string;
  subCategory: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}
export interface IEquipmentRowData {
  id: string;
  equipmentName: string;
  category: string;
  status: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface IBudgetRowData {
  id: string;
  taskName: string;
  totalBudget: number;
  lastUsed: Date;
  budgetSpent: number;
}
export interface IHumanResourceRowData {
  id: string;
  fullName: string;
  username: string;
  email: string;
  lastName: string;
  sex: "male" | "female" | "other";
  role: "frontend" | "backend" | "QA" | "Project Manager";
  allocatedEffort: number;
  startDate: Date;
  endDate: Date;
}

export type RowModelType =
  | "infinite"
  | "viewport"
  | "clientSide"
  | "serverSide";

export type IsRowSelectable = unknown;
export interface IAgGridTableProps {
  heading?: string;
  dropdownMenus?: {
    items?: IDropdownMenuProps["menu"]["items"];
  };
  theme?:
    | "ag-theme-quartz"
    | "ag-theme-alpine"
    | "ag-theme-quartz-dark"
    | "ag-theme-quartz-alpine";
  height?: number;
  tableToolbar: React.ReactNode;
  // rowData?: IRowData[];
  rowData?: [] | undefined;
  colDefs?: ColDef[];
  rowSelection?: "multiple" | "single";
  sidebar?: string | boolean;
  suppressRowClickSelection?: boolean;
  pagination?: boolean;
  paginationPageSize?: number;
  paginationPageSizeSelector?: number[];
  variant?: "primary" | "secondary";
  rowBuffer?: number;
  rowModelType?: RowModelType;
  rowHeight?: number;
  isRowSelectable?: IsRowSelectable;
  rowMultiSelectWithClick?: boolean;
  enableAdvanceFilter?: boolean;
  suppressMenuHide?: boolean;
  rowDragMultiRow?: boolean;
  onGridReady?: () => void;
  onCellClicked?: () => void;
  onCellValueChanged?: () => void;
  onFilterOpened?: () => void;
  onRowSelected?: () => void;
}

export interface IBadgeProps {
  label?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export type TRole = "admin" | "user" | "manager";

export interface ICarouselItem {
  content?: React.ReactNode;
}

export interface ICarouselProps {
  carouselData: ICarouselItem[];
}

export interface IComboboxItem {
  icon?: React.ReactNode;
  label?: string;
  value?: string;
}

export interface IComboboxGroup {
  heading: string;
  comboboxItems: IComboboxItem[];
}
export interface IComboboxProps {
  placeholder: string;
  defaultText: string;
  emptyText: string;
  comboboxGroups: IComboboxGroup[];
}

export interface IAlertProps {
  title: string;
  description: string;
}

export interface IAlertDialogProps {
  trigger: React.ReactNode;
  title: string;
  //   headerTitleClasses: string;
  description: string;
  CancelText: string;
  actionText: string;
}

export interface ICommandItem {
  icon?: React.ReactNode;
  text?: string;
  shortcut?: string;
}

export interface ICommandGroup {
  heading: string;
  commandItems: ICommandItem[];
}
export interface ICommandProps {
  shortcut: string;

  placeholder: string;
  emptyText: string;
  commandGroups: ICommandGroup[];
}

export interface InputProps {
  size?: "sm" | "md" | "lg" | "xl" | "default" | undefined;
  type: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  className?: string;
}

export interface ISearchInput {
  inputSize?: InputProps["size"];
  label?: string;
  placeholder?: string;
  id: string;
  className: string;
  name: string;
  onSubmit: (e: React.FormEvent) => void;
}

export interface ITabTrigger {
  id: string;
  label: string;
}
export interface ITabContent {
  id: string;
  element: React.JSX.Element;
}
export type TTabsProps = {
  triggers: ITabTrigger[];
  contents: ITabContent[];
  className?: string;
};

export interface ISelectGroupItem {
  label: string;
  value: string;
}

export interface ISelectGroup {
  label: string;
  items: ISelectGroupItem[];
}

export interface IGroupSelect {
  placeholder?: string;
  groups: ISelectGroup[];
}

export interface IEmailInputProps {
  size: "sm" | "md" | "lg" | "xl" | "default";
  placeholder: string;
  required: boolean;
  label: string;
  onChange: () => void;
  className: string;
}

export interface INumberInputProps {
  size?: "sm" | "md" | "lg" | "xl" | "default";
  placeholder?: string;
  required?: boolean;
  label?: string;
  className?: string;
  onChange?: () => void;
}

export interface IPasswordInputProps {
  size?: InputProps["size"];
  placeholder?: string;
  required?: boolean;
  label?: string;
  name: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface ITextInputProps {
  size?: InputProps["size"];
  placeholder?: string;
  required?: boolean;
  label?: string;
  name: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface ISubmitButton extends ButtonProps {}

export interface RootLayoutProps {
  children: React.ReactNode;
}

export interface IModalProps {
  trigger: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  body: React.ReactNode;

  footer: React.ReactNode;
}

export interface IProgressBarProps {
  progress: number;
  size: "lg" | "md" | "sm" | "full";
  variant: "primary" | "secondary";
  className: string;
}

export interface IPieChartProps {
  title: string;
  data: {
    labels: string[];
    datasets: { data: number[]; backgroundColor: string[] }[];
  };
}

export interface IBarChartProps {
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderRadius: number;
      pointStyle: string;
    }[];
  };
}

export interface CountryProps {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  region_id: string;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: Timezone[];
  translations: Record<string, string>;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
}

interface Timezone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}

export interface StateProps {
  id: number;
  name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  state_code: string;
  type: string | null;
  latitude: string;
  longitude: string;
}
