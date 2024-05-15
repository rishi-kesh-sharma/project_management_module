import { IoMdNotificationsOutline } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button/button";
import { IHeaderProps } from "@/@types";
import AvatarDropdown from "@/components/custom/common/AvatarDropdownMenu/AvatarDropdownMenu";
import { avatarDropdownMenu } from "@/utils/constants";
import { useState } from "react";
import NotificationCard from "@/components/custom/common/NotificationCard/NotificationCard";
import { useAppSelector } from "@/hooks";
import { selectNotifications, selectUser } from "@/redux/features/app/appSlice";

const Header: React.FC<IHeaderProps> = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = useAppSelector(selectNotifications);
  const user = useAppSelector(selectUser);
  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
  };
  return (
    <div className="flex bg-primary gap-5 items-center justify-between px-2 w-full min-w-[400px] relative ">
      <Link to={"/project/create"}>
        <Button type="button">
          <BiPlus />
          Create
        </Button>
      </Link>

      <div className="flex gap-5 items-center px-2">
        <div className="text-2xl ">
          <IoMdNotificationsOutline
            className="relative cursor-pointer"
            onClick={handleNotificationClick}
          />
          {showNotifications && (
            <NotificationCard
              className="absolute top-[70px] right-[2rem]"
              notifications={notifications}
            />
          )}
        </div>

        <AvatarDropdown
          menu={avatarDropdownMenu}
          name={user.name}
          dropdownSize="sm"
          dropdownVariant="secondary"
          avatarSize="sm"
          imgSrc={user.image}
        />
      </div>
    </div>
  );
};

export default Header;
