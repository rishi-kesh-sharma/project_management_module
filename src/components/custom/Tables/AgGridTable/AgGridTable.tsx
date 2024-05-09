"use strict";
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { AgGridReact } from "@ag-grid-community/react";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { IAgGridTableProps } from "@/@types";

import { ColDef, ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { columnDefinations, tableData } from "./data";

import "./AgGridTable.css";
// css
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ClipboardModule,
  MenuModule,
  RangeSelectionModule,
  RowGroupingModule,
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
  SetFilterModule,
]);

// react table props interface

const AgGridTable: React.FC<IAgGridTableProps> = ({
  theme = "ag-theme-quartz",
  height = 500,
  variant,
  rowData = tableData,
  columnDefs = columnDefinations,
  rowSelection = "multiple",
  suppressRowClickSelection = false,
  pagination = true,
  paginationPageSize = 10,
  paginationPageSizeSelector = [10, 25, 50],
  onGridReady = () => {},
}) => {
  // const [rowData, setRowData] = useState(data);

  // const [columnDefs, setColumnDefs] = useState<ColDef[]>(columnDefinations);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      // filter: "agTextColumnFilter",
      filter: true,
      editable: true,
      floatingFilter: true,
      resizable: true,
      headerCheckboxSelection: false,
      // checkboxSelection: true,
      // enableValue = true,
    };
  }, []);

  return (
    <div className={`${theme}`} style={{ height: height }}>
      {variant === "primary" && (
        <Helmet>
          <link rel="stylesheet" href="/src/AgGridPrimaryTable.css" />
        </Helmet>
      )}

      <AgGridReact
        rowData={rowData}
        // suppressMenuHide={true}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection={rowSelection}
        suppressRowClickSelection={suppressRowClickSelection}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        onGridReady={onGridReady}
        enableRangeSelection={true}
        // sideBar={"columns"}
        // sideBar={true}
        // suppressMenuHide={true}

        // enableAdvancedFilter={true}
      />
    </div>
  );
};
export default AgGridTable;
