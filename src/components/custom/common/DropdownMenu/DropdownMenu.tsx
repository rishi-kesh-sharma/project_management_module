import { IDropdownMenuProps } from "@/@types";
import { DownAngularArrowIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //   DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui//Dropdown/dropdown-menu";

const Dropdown: React.FC<IDropdownMenuProps> = ({
  menu,
  dropdownSize,
  dropdownVariant,
  dropdownTriggerSize,
  dropdownTriggerVariant,
  dropdownTriggerButtonProps,
}) => {
  const getDropdownSizeClasses = (dropdownSize: string) => {
    let classes = "";
    switch (dropdownSize) {
      case "sm":
        classes = "w-[5rem]";
        break;
      case "md":
        classes = "w-[10rem]";
        break;

      case "lg":
        classes = "w-[15rem]";
        break;

      default:
        classes;
    }
    return classes;
  };

  const getDropdownTriggerSizeClasses = (dropdownTriggerSize: string) => {
    let classes = "";

    switch (dropdownTriggerSize) {
      case "sm":
        classes = "w-[4rem]";
        break;
      case "md":
        classes = "w-[7rem]";
        break;
      case "lg":
        classes = "w-[10rem]";
        break;

      default:
        classes;
    }
    return classes;
  };

  const getDropdownVariantClasses = (dropdownVariant: string) => {
    let classes = "";

    switch (dropdownVariant) {
      case "primary":
        classes = "bg-primary text-white border-white border-b-1";
        break;

      case "secondary":
        classes = "bg-gray-100";
        break;

      default:
        classes;
        break;
    }
    return classes;
  };
  const getDropdownTriggerVariantClasses = (dropdownTriggerVariant: string) => {
    let classes = "";
    switch (dropdownTriggerVariant) {
      case "primary":
        classes = "bg-primary text-white border-white border-b-1";
        break;
      case "secondary":
        classes = "bg-gray-100";
        break;

      default:
        classes;
        break;
    }
    return classes;
  };

  const mergedDropdownClasses = `${getDropdownSizeClasses(dropdownSize)} ${getDropdownVariantClasses(dropdownVariant)}`;
  const mergedDropdownTriggerClasses = `${getDropdownTriggerSizeClasses(dropdownTriggerSize)} ${getDropdownTriggerVariantClasses(dropdownTriggerVariant)}`;
  return (
    <DropdownMenu>
      <Button {...dropdownTriggerButtonProps}>
        <DropdownMenuTrigger
          className={`flex items-center gap-2 justify-between ${mergedDropdownTriggerClasses}`}>
          {menu.label} {<DownAngularArrowIcon />}
        </DropdownMenuTrigger>
      </Button>
      {/* <DropdownMenuLabel>{menu.label}</DropdownMenuLabel> */}
      <DropdownMenuContent className={`${mergedDropdownClasses} `}>
        {dropdownVariant !== "primary" && <DropdownMenuSeparator />}
        {menu.items.map((item) => {
          return (
            <DropdownMenuItem className="cursor-pointer">
              {item.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
