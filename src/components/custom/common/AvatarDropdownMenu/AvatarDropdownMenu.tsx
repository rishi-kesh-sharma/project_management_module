import { IAvatarDropdownProps, IDropdownMenuItem } from "@/@types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui//Dropdown/dropdown-menu";
import Avatar from "../Avatar/Avatar";

const AvatarDropdown: React.FC<IAvatarDropdownProps> = ({
  menu,
  imgSrc,
  name,
  dropdownSize,
  dropdownVariant,
  avatarSize,
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

  const getAvatarSizeClasses = (dropdownTriggerSize: string) => {
    let classes = "";

    switch (dropdownTriggerSize) {
      case "sm":
        classes = "w-[3rem] h-[3rem]";
        break;
      case "md":
        classes = "w-[4rem] h-[4rem]";
        break;
      case "lg":
        classes = "w-[6rem] h-[6rem]";
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
        classes =
          "bg-primary dark:bg-background text-white border-white border-b-1";
        break;

      case "secondary":
        classes = "bg-gray-100 dark:bg-primary";
        break;

      default:
        classes;
        break;
    }
    return classes;
  };

  const mergedDropdownClasses = `${getDropdownSizeClasses(dropdownSize)} ${getDropdownVariantClasses(dropdownVariant)}`;
  const mergedAvatarClasses = `${getAvatarSizeClasses(avatarSize)}`;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar
          className={` ${mergedAvatarClasses}`}
          imgSrc={imgSrc}
          name={name}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={`${mergedDropdownClasses} `}>
        {dropdownVariant !== "primary" && <DropdownMenuSeparator />}
        {menu.items.map((item: IDropdownMenuItem) => {
          return (
            <DropdownMenuItem
              className="cursor-pointer bg-secondary  hover:bg-primary/10  dark:border-b-foreground  dark:hover:bg-foreground dark:hover:text-background
             ">
              {item.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropdown;
