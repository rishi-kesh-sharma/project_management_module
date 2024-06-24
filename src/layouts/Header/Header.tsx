
import { IoMdNotificationsOutline } from "react-icons/io";
import { IHeaderProps } from "@/@types";
import { avatarDropdownMenu, commandData } from "@/utils/constants";
import { useContext, useState } from "react";
import NotificationCard from "@/components/custom/common/NotificationCard/NotificationCard";
import {
  useAppSelector,
} from "@/hooks";
import {
  selectNotifications,
  selectUser,
} from "@/redux/features/app/appSlice";
import SearchInput from "@/components/custom/common/SearchInput/SearchInput";
import i18n from "@/intl/i18n";
import CommandDialog from "@/components/custom/common/Command/Command";
import AvatarDropdown from "@/components/custom/common/Dropdowns/AvatarDropdownMenu/AvatarDropdownMenu";
import { TimerContext } from "@/hooks/TimerProvider";

const Header: React.FC<IHeaderProps> = () => {
  const values = useContext(TimerContext)
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = useAppSelector(selectNotifications);
  const user = useAppSelector(selectUser);
  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleGlobalSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex  gap-5 items-center justify-between px-2 w-full min-w-[400px] relative  ">
      <div>
        {values?.hasTaskStarted && (
          <div className="text-3xl font-semibold">
            <span>{values?.days}</span>:<span>{values?.hours}</span>:<span>{values?.minutes}</span>:
            <span>{values?.seconds}</span>
          </div>
        )}
      </div>
      <SearchInput
        id="global-search"
        name="global-search"
        placeholder={i18n.t("component.header.search", "Search")}
        inputSize="lg"
        className=""
        onSubmit={handleGlobalSearch}
      />

      <CommandDialog commandData={commandData} />
      <div className="flex gap-5 items-center  px-2 ">
        {/* <Timer /> */}
        <div className="text-2xl ">
          <IoMdNotificationsOutline
            className="relative cursor-pointer"
            onClick={handleNotificationClick}
          />
          {showNotifications && (
            <NotificationCard
              className="absolute top-[70px]  z-50 right-[2rem]"
              notifications={notifications}
            />
          )}
        </div>
        <AvatarDropdown
          menu={avatarDropdownMenu}
          name={(user && user.name && user.name) || ``}
          dropdownSize="sm"
          dropdownVariant="default"
          avatarSize="sm"
          imgSrc={(user && user.image && user.image) || ``}
        />
      </div>
    </div>
  );
};

export default Header;
