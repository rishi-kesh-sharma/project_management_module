"use strict";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Helmet } from "react-helmet";
import { AgGridReact } from "@ag-grid-community/react";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { CsvExportModule } from "@ag-grid-community/csv-export";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { IAgGridTableProps } from "@/@types";

import {
  ColDef,
  ModuleRegistry,
  // GetRowIdFunc,
  // GetRowIdParams,
  // RowSelectedEvent,
  // SelectionChangedEvent,
  // IGroupCellRendererParams,
  // ColGroupDef,
  // GridApi,
  // GridOptions,
  // GridReadyEvent,
  // IGroupCellRenderParams,
  // ISGroupOpenByDefaultParams,
  // ValueFormatterParams,
  // createGrid,
} from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

// ag grid table custom css
import "./AgGridTable.css";

// css
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "@/components/ui/Button/button";

// module registration
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ClipboardModule,
  MenuModule,
  RangeSelectionModule,
  RowGroupingModule,
  FiltersToolPanelModule,
  ColumnsToolPanelModule,
  SetFilterModule,
  CsvExportModule,
  ExcelExportModule,
]);

// react table props interface
const AgGridTable: React.FC<IAgGridTableProps> = ({
  theme = "ag-theme-quartz",
  height = 500,
  variant,
  colDefs: columnDefinations,
  rowData: tableData,
  rowSelection = "multiple",
  suppressRowClickSelection = true,
  pagination = true,
  paginationPageSize = 10,
  paginationPageSizeSelector = [10, 25, 50, 100],
  rowBuffer = 0,
  rowModelType = "clientSide",
  rowHeight = 50,
  onGridReady = () => {},
  onCellClicked,
  onCellValueChanged,
  onRowSelected,
  onFilterOpened,
  sidebar = true,
  suppressMenuHide = false,
  rowDragMultiRow = true,
  rowMultiSelectWithClick = true,
  enableAdvanceFilter = false,
  // isRowSelectable = true,
}) => {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState(tableData);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>();

  // container style
  // const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const containerStyle = useMemo(() => ({}), []);

  // grid style
  // const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const gridStyle = useMemo(() => ({}), []);

  // number cell formatter
  // function numberCellFormatter(params: ValueFormatterParams) {
  //   return Math.floor(params.value)
  //     .toString()
  //     .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  // }

  // default columns defination
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      filter: true,
      editable: true,
      floatingFilter: true,
      resizable: true,
      headerCheckboxSelection: false,
      showDisabledCheckboxes: true,
      headerCheckboxSelectionFilteredOnly: false,
      // cellRenderer: "agGroupCellRenderer",
      flex: 1,
      minWidth: 200,

      // cellRendererParams: {
      //   checkbox: true,
      // } as IGroupCellRendererParams,
      // rowDrag: true,
      // rowDragText:"hello"
      // rowGroup: true,
      // hide:true
      // enableRowGroup:true
      // cellClass: "number",
      // enablePivot: true,
      //value formatter
      // headerCheckboxSelectionFilteredOnly:true,
      // headerCheckboxSelectionCurrentPageOnly:true
      // filter: "agTextColumnFilter",
      // filter: "agNumberColumnFilter",
      // checkboxSelection: true,
      //  valueFormatter:numberCellFormatter
      // enableValue = true,
      // flex: 1,
      // aggFunc: "sum",
      // field:""
    };
  }, []);

  // const autoGroupColumnDef = useMemo<ColDef>(() => {
  //   return {
  //     headerName: "Cars",
  //     field: "model",
  //     minWidth: 250,
  //     cellRenderer: "agGroupCellRenderer" | "agAnimateShowChangeCellRenderer",
  //     cellRendererParams: {
  //       checkbox: true,
  //     } as IGroupCellRendererParams,
  //   };
  // }, []);

  // will only re-run selection logic when count changes

  // const onRowSelected = useCallback(
  //   (event: RowSelectedEvent) => {
  //     window.alert(
  //       "row " +
  //         event.node.data.athlete +
  //         " selected = " +
  //         event.node.isSelected(),
  //     );
  //   },
  //   [window],
  // );

  // const onSelectionChanged = useCallback(
  //   (event: SelectionChangedEvent) => {
  //     var rowCount = event.api.getSelectedNodes().length;
  //     window.alert("selection changed, " + rowCount + " rows selected");
  //   },
  //   [window],
  // );

  // const selectAllAmerican = useCallback(() => {
  //   const selected: IRowNode[] = [];
  //   const deselected: IRowNode[] = [];
  //   gridRef.current!.api.forEachNode(function (node) {
  //     if (node.data!.country === "United States") {
  //       selected.push(node);
  //     } else {
  //       deselected.push(node);
  //     }
  //   });
  //   gridRef.current!.api.setNodesSelected({ nodes: selected, newValue: true });
  //   gridRef.current!.api.setNodesSelected({
  //     nodes: deselected,
  //     newValue: false,
  //   });
  // }, []);

  // use effect to set the  column definations and table data

  const onBtnCSVExport = useCallback(() => {
    const exportCsvParams = { allColumns: true };
    gridRef.current!.api.exportDataAsCsv(exportCsvParams);
  }, []);
  const onBtnXLSXExport = useCallback(() => {
    const exportXLSXParams = { allColumns: true };
    gridRef.current!.api.exportDataAsExcel(exportXLSXParams);
  }, []);

  useEffect(() => {
    setColumnDefs(columnDefinations);
    setRowData(tableData);
  }, [columnDefinations, tableData]);

  return (
    <div style={containerStyle}>
      <div
        className="flex items-center gap-[1rem] justify-end"
        style={{ margin: "10px 0" }}
      >
        <Button variant={"outline"} onClick={onBtnCSVExport}>
          Export CSV{" "}
        </Button>
        <Button variant={"default"} onClick={onBtnXLSXExport}>
          Export XLSX{" "}
        </Button>
      </div>
      <div className={`${theme}`} style={{ ...gridStyle, height: height }}>
        {variant === "primary" && (
          <Helmet>
            <link rel="stylesheet" href="/src/AgGridPrimaryTable.css" />
          </Helmet>
        )}

        <AgGridReact
          ref={gridRef}
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
          rowMultiSelectWithClick={rowMultiSelectWithClick}
          rowDragMultiRow={rowDragMultiRow}
          sideBar={sidebar}
          suppressMenuHide={suppressMenuHide}
          enableAdvancedFilter={enableAdvanceFilter}
          rowBuffer={rowBuffer}
          rowModelType={rowModelType}
          rowHeight={rowHeight}
          onCellClicked={onCellClicked}
          onCellValueChanged={onCellValueChanged}
          onFilterOpened={onFilterOpened}
          groupSelectsChildren={true}
          groupSelectsFiltered={true}
          onRowSelected={onRowSelected}
          // rowDragEntireRow={true}

          // suppressCellFocus={true}

          // columnHoverHighlight={false}
          // suppressPaginationPanel={true}
          // animateRows={false}
          // paginateChildRows={true}
          // suppressScrollOnNewData={true}
          // rowGroupPanelShow={"always"}
          // pivotPanelShow={"always"}
          // suppressRowHoverHighlight={true}
          // paginationAutoPageSize={true}
          // getRowId={getRowId}
          // autoGroupColumnDef={autoGroupColumnDef}
          // isRowSelectable={isRowSelectable}
        />
      </div>
    </div>
  );
};
export default AgGridTable;
