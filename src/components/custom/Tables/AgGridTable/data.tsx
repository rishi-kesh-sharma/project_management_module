import { IRowData } from "@/@types";
import Badge from "../../Badge/Badge";
import { IGroupCellRendererParams } from "@ag-grid-community/core";
import { EditIcon, TrashIcon } from "@/components/icons/commonIcons";

export const rowData: IRowData[] = [
  {
    make: "Tesla",
    model: "Model Y",
    price: 64950,
    electric: true,
    month: "June",
  },
  {
    make: "Ford",
    model: "F-Series",
    price: 33850,
    electric: false,
    month: "October",
  },
  {
    make: "Toyota",
    model: "Corolla",
    price: 29600,
    electric: false,
    month: "August",
  },
  {
    make: "Mercedes",
    model: "EQA",
    price: 48890,
    electric: true,
    month: "February",
  },
  {
    make: "Fiat",
    model: "500",
    price: 15774,
    electric: false,
    month: "January",
  },
  {
    make: "Nissan",
    model: "Juke",
    price: 20675,
    electric: false,
    month: "March",
  },
  {
    make: "Vauxhall",
    model: "Corsa",
    price: 18460,
    electric: false,
    month: "July",
  },
  {
    make: "Volvo",
    model: "EX30",
    price: 33795,
    electric: true,
    month: "September",
  },
  {
    make: "Mercedes",
    model: "Maybach",
    price: 175720,
    electric: false,
    month: "December",
  },
  {
    make: "Vauxhall",
    model: "Astra",
    price: 25795,
    electric: false,
    month: "April",
  },
  {
    make: "Fiat",
    model: "Panda",
    price: 13724,
    electric: false,
    month: "November",
  },
  {
    make: "Jaguar",
    model: "I-PACE",
    price: 69425,
    electric: true,
    month: "May",
  },
  {
    make: "Tesla",
    model: "Model Y",
    price: 64950,
    electric: true,
    month: "June",
  },
  {
    make: "Ford",
    model: "F-Series",
    price: 33850,
    electric: false,
    month: "October",
  },
  {
    make: "Toyota",
    model: "Corolla",
    price: 29600,
    electric: false,
    month: "August",
  },
  {
    make: "Mercedes",
    model: "EQA",
    price: 48890,
    electric: true,
    month: "February",
  },
  {
    make: "Fiat",
    model: "500",
    price: 15774,
    electric: false,
    month: "January",
  },
  {
    make: "Nissan",
    model: "Juke",
    price: 20675,
    electric: false,
    month: "March",
  },
  {
    make: "Vauxhall",
    model: "Corsa",
    price: 18460,
    electric: false,
    month: "July",
  },
  {
    make: "Volvo",
    model: "EX30",
    price: 33795,
    electric: true,
    month: "September",
  },
  {
    make: "Mercedes",
    model: "Maybach",
    price: 175720,
    electric: false,
    month: "December",
  },
  {
    make: "Vauxhall",
    model: "Astra",
    price: 25795,
    electric: false,
    month: "April",
  },
  {
    make: "Fiat",
    model: "Panda",
    price: 13724,
    electric: false,
    month: "November",
  },
  {
    make: "Jaguar",
    model: "I-PACE",
    price: 69425,
    electric: true,
    month: "May",
  },
  {
    make: "Tesla",
    model: "Model Y",
    price: 64950,
    electric: true,
    month: "June",
  },
  {
    make: "Ford",
    model: "F-Series",
    price: 33850,
    electric: false,
    month: "October",
  },
  {
    make: "Toyota",
    model: "Corolla",
    price: 29600,
    electric: false,
    month: "August",
  },
  {
    make: "Mercedes",
    model: "EQA",
    price: 48890,
    electric: true,
    month: "February",
  },
  {
    make: "Fiat",
    model: "500",
    price: 15774,
    electric: false,
    month: "January",
  },
  {
    make: "Nissan",
    model: "Juke",
    price: 20675,
    electric: false,
    month: "March",
  },
  {
    make: "Vauxhall",
    model: "Corsa",
    price: 18460,
    electric: false,
    month: "July",
  },
  {
    make: "Volvo",
    model: "EX30",
    price: 33795,
    electric: true,
    month: "September",
  },
  {
    make: "Mercedes",
    model: "Maybach",
    price: 175720,
    electric: false,
    month: "December",
  },
  {
    make: "Vauxhall",
    model: "Astra",
    price: 25795,
    electric: false,
    month: "April",
  },
  {
    make: "Fiat",
    model: "Panda",
    price: 13724,
    electric: false,
    month: "November",
  },
  {
    make: "Jaguar",
    model: "I-PACE",
    price: 69425,
    electric: true,
    month: "May",
  },
];

export const colDefs = [
  {
    field: "make",
    headerCheckboxSelection: true,
    headerName: "Brand",
    enableRowGroup: true,

    // rowGroup: true,
    cellEditor: "agSelectCellEditor",
    cellRendererParams: {
      checkbox: true,
    } as IGroupCellRendererParams,
    checkboxSelection: true,
    // hide: true,
    cellEditorParams: {
      values: [
        "Tesla",
        "Ford",
        "Toyota",
        "Mercedes",
        "Fiat",
        "Nissan",
        "Vauxhall",
        "Volvo",
        "Jaguar",
      ],
    },
  },
  { field: "model" },
  { field: "price", filter: "agNumberColumnFilter", aggFunc: "sum" },
  { field: "electric" },
  {
    field: "month",
    cellRenderer: (p: { value: string }) => {
      return <Badge label={p.value} variant={"outline"} />;
    },
    comparator: (valueA: string, valueB: string) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const idxA = months.indexOf(valueA);
      const idxB = months.indexOf(valueB);
      return idxA - idxB;
    },
  },
  {
    field: "Actions",
    editable: false,
    floatingFilter: false,
    filter: false,
    enablePivot: false,
    headerCheckboxSelection: false,
    cellRenderer: (p: { value: string }) => {
      return (
        <div className="flex gap-2 items-center justify-start  h-full">
          <TrashIcon className="text-destructive" />
          <EditIcon className="text-blue-900" />
        </div>
      );
    },
  },
];


export const projectData = [
  {
    projectName: "Project A",
    createdBy: "John Doe",
    startDate: "2024-05-01",
    status: "Pending",
    dueDate: "2024-06-15",
    priority: "High"
  },
  {
    projectName: "Project B",
    createdBy: "Jane Smith",
    startDate: "2024-04-20",
    status: "Not Started",
    dueDate: "2024-07-10",
    priority: "Medium"
  },
  {
    projectName: "Project C",
    createdBy: "Alice Johnson",
    startDate: "2024-05-10",
    status: "Pending",
    dueDate: "2024-06-30",
    priority: "Low"
  },
  {
    projectName: "Project D",
    createdBy: "Michael Brown",
    startDate: "2024-05-05",
    status: "Not Started",
    dueDate: "2024-07-20",
    priority: "High"
  },
  {
    projectName: "Project E",
    createdBy: "Emily Davis",
    startDate: "2024-04-25",
    status: "Pending",
    dueDate: "2024-07-05",
    priority: "Medium"
  },
  {
    projectName: "Project F",
    createdBy: "David Wilson",
    startDate: "2024-05-15",
    status: "Pending",
    dueDate: "2024-07-25",
    priority: "Low"
  },
  {
    projectName: "Project G",
    createdBy: "Sophia Martinez",
    startDate: "2024-05-02",
    status: "Pending",
    dueDate: "2024-06-20",
    priority: "Medium"
  },
  {
    projectName: "Project H",
    createdBy: "James Taylor",
    startDate: "2024-04-22",
    status: "Not Started",
    dueDate: "2024-07-15",
    priority: "High"
  },
  {
    projectName: "Project I",
    createdBy: "Olivia Garcia",
    startDate: "2024-05-12",
    status: "Pending",
    dueDate: "2024-07-10",
    priority: "Low"
  },
  {
    projectName: "Project J",
    createdBy: "William Hernandez",
    startDate: "2024-05-07",
    status: "Pending",
    dueDate: "2024-07-30",
    priority: "High"
  }
];

export const taskData = [
  {
    taskName: "Task 1",
    createdBy: "Alice Smith",
    priority: "High",
    assignee: "Emma Johnson",
    startDate: "2024-05-02",
    dueDate: "2024-06-05",
    status: "Pending"
  },
  {
    taskName: "Task 2",
    createdBy: "John Doe",
    priority: "Medium",
    assignee: "Michael Brown",
    startDate: "2024-05-03",
    dueDate: "2024-06-10",
    status: "Not Started"
  },
  {
    taskName: "Task 3",
    createdBy: "Jane Smith",
    priority: "Low",
    assignee: "David Wilson",
    startDate: "2024-04-30",
    dueDate: "2024-07-01",
    status: "Completed"
  },
  {
    taskName: "Task 4",
    createdBy: "Michael Brown",
    priority: "Medium",
    assignee: "Olivia Garcia",
    startDate: "2024-05-01",
    dueDate: "2024-06-20",
    status: "Not Started"
  },
  {
    taskName: "Task 5",
    createdBy: "Alice Johnson",
    priority: "High",
    assignee: "Sophia Martinez",
    startDate: "2024-05-02",
    dueDate: "2024-06-25",
    status: "Pending"
  },
  {
    taskName: "Task 6",
    createdBy: "David Wilson",
    priority: "Low",
    assignee: "John Doe",
    startDate: "2024-05-03",
    dueDate: "2024-07-15",
    status: "Pending"
  },
  {
    taskName: "Task 7",
    createdBy: "Olivia Garcia",
    priority: "Medium",
    assignee: "Jane Smith",
    startDate: "2024-05-01",
    dueDate: "2024-07-05",
    status: "Not Started"
  },
  {
    taskName: "Task 8",
    createdBy: "Sophia Martinez",
    priority: "High",
    assignee: "Alice Johnson",
    startDate: "2024-04-30",
    dueDate: "2024-07-20",
    status: "Not Started"
  }
];

export const WorkspaceData = [
  {
    workspaceName: "Workspace 1",
    createdBy: "John Doe",
    createdOn: "2024-05-01",
    lastUpdated: "2024-05-05"
  },
  {
    workspaceName: "Workspace 2",
    createdBy: "Jane Smith",
    createdOn: "2024-04-20",
    lastUpdated: "2024-04-25"
  },
  {
    workspaceName: "Workspace 3",
    createdBy: "Alice Johnson",
    createdOn: "2024-05-10",
    lastUpdated: "2024-05-15"
  },
  {
    workspaceName: "Workspace 4",
    createdBy: "Michael Brown",
    createdOn: "2024-05-05",
    lastUpdated: "2024-05-10"
  },
  {
    workspaceName: "Workspace 5",
    createdBy: "Emily Davis",
    createdOn: "2024-04-25",
    lastUpdated: "2024-05-01"
  },
  {
    workspaceName: "Workspace 6",
    createdBy: "David Wilson",
    createdOn: "2024-05-15",
    lastUpdated: "2024-05-20"
  }
];
