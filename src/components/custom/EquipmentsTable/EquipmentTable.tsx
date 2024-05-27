import AgGridTable from "@/components/custom/common/Tables/AgGridTable/AgGridTable";
import { colDefs } from "./colDefs";
import TableToolbar from "@/components/custom/common/TableElements/TableToolbar/TableToolbar";
import { IEquipmentRowData } from "@/@types";
import { PlusIcon } from "../common/icons/commonIcons";
import { Button } from "@/components/ui/Button/button";
import AssignEquipmentStepperForm from "./AssignEquipmentStepperForm";
import { EquipmentTableFilters } from "@/utils/constants";

const dropdownMenus = {
  items: [
    { id: "1", isLink: false, label: "Export CSV" },
    { id: "2", isLink: false, label: "Export XLSX" },
    { id: "3", isLink: false, label: "Send Email" },
  ],
};

const EquipmentTable = ({
  equipments,
}: {
  equipments: IEquipmentRowData[];
}) => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // if (!equipment) return "loading...";
  return (
    <div className="mt-[2rem]">
      <AgGridTable
        tableToolbar={
          <TableToolbar
            hasFilters={true}
            filters={<EquipmentTableFilters />}
            heading={"Equipment"}
            handleSearch={handleSearch}
            dropdownMenus={dropdownMenus}
            createButtonText="Equipment"
            type="modal"
            modal={{
              title: "Assign Equipment",
              description:
                "You can assign the equipments from here to your project",
              trigger: (
                <Button className="flex gap-2">
                  <PlusIcon />
                  <span>Equipment</span>
                </Button>
              ),
              body: (
                <div className="flex flex-col gap-4">
                  <AssignEquipmentStepperForm />
                </div>
              ),
            }}
          />
        }
        rowData={equipments}
        heading={"Equipment"}
        dropdownMenus={dropdownMenus}
        colDefs={colDefs}
      />
    </div>
  );
};

export default EquipmentTable;
