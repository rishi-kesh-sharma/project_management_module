import {
  PlusIcon,
  StartIcon,
  ThreeHorizontalInsideCircle,
  ThreeVerticalDots,
} from "@/components/icons/commonIcons";
import IconDropdown from "../common/IconDropdown/IconDropdown";
import SearchInput from "../common/SearchInput/SearchInput";
import { Button } from "@/components/plate-ui/button";
import { IIconDropdownMenuProps } from "@/@types";

export interface ITableToolbar {
  handleSearch: (e: React.FormEvent) => void;
  dropdownMenus: IIconDropdownMenuProps["menu"];
  heading: string;
}
const TableToolbar: React.FC<ITableToolbar> = ({
  handleSearch,
  dropdownMenus,
  heading,
}) => {
  return (
    <div>
      <div className="flex items-end w-full justify-between mb-[1rem]">
        <div className="flex items-center gap-5 ">
          <h2 className="text-nowrap text-xl font-semibold">{heading}</h2>
          <div className="flex gap-2  ">
            <StartIcon className="text-orange-400 text-lg cursor-pointer" />
            <ThreeHorizontalInsideCircle className="text-primary text-lg cursor-pointer" />
          </div>
        </div>

        <div className="w-full flex flex-col gap-[1rem]  items-end">
          <IconDropdown
            menu={dropdownMenus}
            dropdownSize="sm"
            dropdownVariant="secondary"
            icon={<ThreeVerticalDots />}
          />

          <div className="flex items-center  gap-[1rem]">
            <SearchInput
              onSubmit={handleSearch}
              id="workspace-search"
              name="workspace-search"
              inputSize="lg"
              placeholder="Search here..."
              className=""
            />
            <Button className="flex gap-2">
              <PlusIcon />
              <span>Project</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableToolbar;
