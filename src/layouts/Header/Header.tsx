/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {
  selectNotifications,
  selectUser,
  setLanguage,
} from "@/redux/features/app/appSlice";
import SearchInput from "@/components/custom/common/SearchInput/SearchInput";
import Dropdown from "@/components/custom/common/DropdownMenu/DropdownMenu";
import { availableLanguages } from "@/utils/constants/intl";
import { availableThemes } from "@/utils/constants/theme";
import { useTheme } from "@/components/Theme/ThemeProvider";

const Header: React.FC<IHeaderProps> = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = useAppSelector(selectNotifications);
  const { setTheme } = useTheme();

  const user = useAppSelector(selectUser);
  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
  };

  const handleGlobalSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleLanguageSelect = (e: any) => {
    if (e && e.target && e.target.id) {
      setLanguage({ language: e.target.id });
    }
  };
  const handleThemeSelect = (e: any) => {
    if (e && e.target && e.target.id) {
      setTheme(e.target.id);
    }
  };

  return (
    <div className="flex  gap-5 items-center justify-between px-2 w-full min-w-[400px] relative ">
      <Link to={"/project/create"}>
        <Button type="button" variant={"default"}>
          <BiPlus />
          Create
        </Button>
      </Link>
      <SearchInput
        id="global-search"
        name="global-search"
        placeholder="Search here..."
        inputSize="lg"
        className=""
        onSubmit={handleGlobalSearch}
      />

      <div className="flex gap-5 items-center px-2">
        <Dropdown
          menu={{ label: "Select theme", items: availableThemes }}
          dropdownSize="sm"
          dropdownVariant="secondary"
          dropdownTriggerSize={"sm"}
          dropdownTriggerVariant={"outline"}
          onSelect={handleThemeSelect}
        />
        <Dropdown
          menu={{ label: "Select language", items: availableLanguages }}
          dropdownSize="sm"
          dropdownVariant="secondary"
          dropdownTriggerSize={"sm"}
          dropdownTriggerVariant={"outline"}
          onSelect={handleLanguageSelect}
        />
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
