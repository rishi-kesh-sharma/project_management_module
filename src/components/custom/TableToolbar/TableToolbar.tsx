import {
  PlusIcon,
  StarIcon,
  ThreeHorizontalInsideCircle,
  ThreeVerticalDots,
} from "@/components/icons/commonIcons";
import IconDropdown from "../common/IconDropdown/IconDropdown";
import SearchInput from "../common/SearchInput/SearchInput";
import { Button } from "@/components/plate-ui/button";
import { IIconDropdownMenuProps } from "@/@types";
import { getSuccessToast } from "@/utils/constants/toast";
import { useTheme } from "@/components/Theme/ThemeProvider";
import { Link } from "react-router-dom";

export interface ITableToolbar {
  handleSearch: (e: React.FormEvent) => void;
  dropdownMenus: IIconDropdownMenuProps["menu"];
  heading: string;
  createButtonText?: string;
  createPagePath?: string;
}
const TableToolbar: React.FC<ITableToolbar> = ({
  handleSearch,
  dropdownMenus,
  heading,
  createButtonText,
  createPagePath,
}) => {
  const { theme } = useTheme();
  const handleBookmarkClick = () => {
    getSuccessToast("Workspace bookmarked", theme);
  };
  return (
    <div>
      <div className="flex items-end w-full justify-between mb-[1rem]">
        <div className="flex items-center gap-5 ">
          <h2 className="text-nowrap text-xl font-semibold">{heading}</h2>
          <div className="flex gap-2  ">
            <StarIcon
              onClick={handleBookmarkClick}
              className="text-orange-400 text-lg cursor-pointer"
            />
            <ThreeHorizontalInsideCircle className="text-primary text-lg cursor-pointer" />
          </div>
        </div>

        <div className="w-full flex flex-col gap-[1rem]  items-end">
          <IconDropdown
            menu={dropdownMenus}
            dropdownSize="sm"
            dropdownVariant="default"
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
            {createPagePath && createButtonText && (
              <Button className="flex gap-2" asChild>
                <Link to={`${createPagePath}`}>
                  <PlusIcon />
                  <span>{createButtonText}</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableToolbar;
