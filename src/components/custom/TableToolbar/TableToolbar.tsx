import {
  ArchiveIconFilled,
  ArchiveIconOutlined,
  PlusIcon,
  StarIconFilled,
  StarIconOutlined,
  ThreeVerticalDots,
} from "@/components/icons/commonIcons";
import IconDropdown from "../common/IconDropdown/IconDropdown";
import SearchInput from "../common/SearchInput/SearchInput";
import { Button } from "@/components/plate-ui/button";
import { IIconDropdownMenuProps } from "@/@types";
import { getSuccessToast } from "@/utils/constants/toast";
import { useTheme } from "@/components/Theme/ThemeProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

export interface ITableToolbar {
  handleSearch: (e: React.FormEvent) => void;
  dropdownMenus: IIconDropdownMenuProps["menu"];
  heading: string;
  createButtonText?: string;
  createPagePath?: string;
  hasBookmark: boolean;
  hasArchive: boolean;
}
const TableToolbar: React.FC<ITableToolbar> = ({
  handleSearch,
  dropdownMenus,
  heading,
  createButtonText,
  createPagePath,
  hasBookmark,
  hasArchive,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const { theme } = useTheme();
  const toggleBookmark = () => {
    if (isBookmarked) {
      getSuccessToast("Removed from bookmarks", theme);
    } else {
      getSuccessToast("Bookmarked", theme);
    }

    setIsBookmarked((prev) => !prev);
  };

  const toggleArchive = () => {
    if (isArchived) {
      getSuccessToast("Removed from archived", theme);
    } else {
      getSuccessToast("Archived", theme);
    }

    setIsArchived((prev) => !prev);
  };
  return (
    <div>
      <div className="flex items-end w-full justify-between mb-[1rem]">
        <div className="flex items-center gap-5 ">
          <h2 className="text-nowrap text-xl font-semibold">{heading}</h2>
          {hasBookmark && (
            <div className="flex gap-2  ">
              {isBookmarked ? (
                <StarIconFilled
                  onClick={toggleBookmark}
                  className="text-orange-400 text-lg cursor-pointer"
                />
              ) : (
                <StarIconOutlined
                  onClick={toggleBookmark}
                  className="text-orange-400 text-lg cursor-pointer"
                />
              )}

              {/* <ThreeHorizontalInsideCircle className="text-primary text-lg cursor-pointer" /> */}
            </div>
          )}

          {hasArchive && (
            <div className="flex gap-2  ">
              {isArchived ? (
                <ArchiveIconFilled
                  onClick={toggleArchive}
                  className="text-orange-400 text-lg cursor-pointer"
                />
              ) : (
                <ArchiveIconOutlined
                  onClick={toggleArchive}
                  className="text-orange-400 text-lg cursor-pointer"
                />
              )}

              {/* <ThreeHorizontalInsideCircle className="text-primary text-lg cursor-pointer" /> */}
            </div>
          )}
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
