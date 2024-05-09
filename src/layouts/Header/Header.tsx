import { IoMdNotificationsOutline } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button/button";
import { IHeaderProps } from "@/@types";
import AvatarDropdown from "@/components/custom/common/AvatarDropdownMenu/AvatarDropdownMenu";
import { avatarDropdownMenu } from "@/utils/constants";

const Header: React.FC<IHeaderProps> = ({ user }) => {
  return (
    <div className="flex gap-5 items-center justify-between px-2 w-full min-w-[400px] ">
      <Link to={"/project/create"}>
        <Button type="button">
          <BiPlus />
          Create
        </Button>
      </Link>

      <div className="flex gap-5 items-center px-2">
        <div className="text-2xl">
          <IoMdNotificationsOutline />
        </div>

        <AvatarDropdown
          menu={avatarDropdownMenu}
          name={user.name}
          dropdownSize="sm"
          dropdownVariant="secondary"
          avatarSize="sm"
          imgSrc=""
        />
      </div>
    </div>
  );
};

export default Header;
