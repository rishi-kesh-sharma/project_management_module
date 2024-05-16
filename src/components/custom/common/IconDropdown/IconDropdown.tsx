import { IIconDropdownMenuProps } from "@/@types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui//Dropdown/dropdown-menu";
import { cva } from "class-variance-authority";

const iconDropdownVariants = cva("", {
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

const IconDropdown: React.FC<IIconDropdownMenuProps> = ({
  menu,
  dropdownSize,
  dropdownVariant,
  icon,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{icon}</DropdownMenuTrigger>
      <DropdownMenuContent
        className={`${iconDropdownVariants({ dropdownSize, dropdownVariant })} `}>
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

export default IconDropdown;
export { iconDropdownVariants };
