import { IDropdownMenuProps } from "@/@types";
import { DownAngularArrowIcon } from "@/components/icons/commonIcons";
import { Button } from "@/components/ui/Button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui//Dropdown/dropdown-menu";
import { cva } from "class-variance-authority";
import { buttonVariants } from "@/components/plate-ui/button";

const dropdownVariants = cva("", {
  variants: {
    dropdownSize: {
      sm: "w-[5rem]",
      md: "w-[10rem]",
      lg: "w-[15rem]",
      default: "w-[12rem]",
    },
    dropdownVariant: {
      primary: "bg-primary text-white border-white border-b-1",
      secondary: "bg-gray-100",
      default: "bg-gray-100",
    },
  },
  defaultVariants: {
    dropdownSize: "default",
    dropdownVariant: "default",
  },
});

const Dropdown: React.FC<IDropdownMenuProps> = ({
  menu,
  dropdownSize,
  dropdownVariant,
  dropdownTriggerSize,
  dropdownTriggerVariant,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        // className={`flex items-center gap-2 justify-between ${dropdownTriggerVariants({ dropdownTriggerSize, dropdownTriggerVariant })}`}
        className={`flex items-center gap-2 justify-between ${ buttonVariants({ size: dropdownTriggerSize, variant: dropdownTriggerVariant })}`}>
        {menu.label} {<DownAngularArrowIcon />}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`${dropdownVariants({ dropdownSize, dropdownVariant })} `}>
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
export { dropdownVariants };
