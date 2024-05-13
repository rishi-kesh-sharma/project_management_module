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
