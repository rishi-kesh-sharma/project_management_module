import {
  ArchiveIconFilled,
  ArchiveIconOutlined,
  NotificationIconOutlined,
  PlusIcon,
  StarIconFilled,
  StarIconOutlined,
  ThreeVerticalDots,
} from "@/components/custom/common/icons/commonIcons";
import { Button } from "@/components/plate-ui/button";
import { IIconDropdownMenuProps, IModalProps } from "@/@types";
import { getSuccessToast } from "@/utils/constants/toast";
import { useTheme } from "@/components/Providers/Theme/ThemeProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import IconDropdown from "../../Dropdowns/IconDropdown/IconDropdown";
import SearchInput from "../../SearchInput/SearchInput";
import { ProjectsTableFilters } from "@/utils/constants";
import Modal from "../../Modal/Modal";

export interface ITableToolbar {
  handleSearch: (e: React.FormEvent) => void;
  dropdownMenus: IIconDropdownMenuProps["menu"];
  heading: string;
  createButtonText?: string;
  createPagePath?: string;
  hasBookmark?: boolean;
  hasArchive?: boolean;
  hasFilters?: boolean;
  filters?: React.ReactNode;
  type?: "page" | "modal";
  hasNotification?: boolean;

  modal?: IModalProps;
}
const TableToolbar: React.FC<ITableToolbar> = ({
  handleSearch,
  dropdownMenus,
  heading,
  createButtonText,
  createPagePath,
  hasBookmark,
  hasArchive,
  hasFilters = true,
  filters = ProjectsTableFilters,
  type = "page",
  modal,
  hasNotification = false,
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
        <div className="flex items-center gap-4 ">
          <h2 className="text-nowrap text-xl font-semibold text-primary">
            {heading}
          </h2>
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
                  className="text-gray-500 text-lg cursor-pointer"
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
                  className="text-primary text-lg cursor-pointer"
                />
              ) : (
                <ArchiveIconOutlined
                  onClick={toggleArchive}
                  className="text-gray-500 text-lg cursor-pointer"
                />
              )}

              {/* <ThreeHorizontalInsideCircle className="text-primary text-lg cursor-pointer" /> */}
            </div>
          )}
          {hasNotification && (
            <NotificationIconOutlined className="text-2xl  text-gray-500" />
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
            {hasFilters && filters && filters}
            <SearchInput
              onSubmit={handleSearch}
              id="workspace-search"
              name="workspace-search"
              inputSize="lg"
              placeholder="Search here..."
              className=""
            />
            {type === "page" && (
              <Button className="flex gap-2" asChild>
                <Link to={`${createPagePath}`}>
                  <PlusIcon />
                  <span>{createButtonText && createButtonText}</span>
                </Link>
              </Button>
            )}
            {type == "modal" && <Modal {...modal} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableToolbar;
