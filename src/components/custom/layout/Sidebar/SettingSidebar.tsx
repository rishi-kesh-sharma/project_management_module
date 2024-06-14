// import { getUniqueKey } from "@/utils/methods/stringMethods";
import config from "@/config";
import {
  AccountIcon,
  LeftAngularArrowIcon,
  LogoutIcon,
  PreferencesIcon,
  ProfileIcon,
  RightAngularArrowIcon,
  SettingIcon,
  // SettingIcon,
} from "@/components/custom/common/icons/commonIcons";
import { SidebarItemProps, SidebarProps } from "@/@types";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  collapseSidebar,
  expandSidebar,
  selectIsSidebarExpanded,
} from "@/redux/features/app/appSlice";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion/accordion";
import { buttonVariants } from "@/components/ui/Button/button";
import { cn } from "@/lib/utils";
import i18n from "@/intl/i18n";
import {
  useLoginUserMutation,
  useLogoutUserQuery,
  usePrefetch,
} from "@/api/user";

const settings = {
  label: i18n.t("component.sidebar.menu.settings", "Settings"),
  icon: <SettingIcon />,
  items: [
    {
      label: i18n.t("component.sidebar.menu.account", "Account"),
      link: "/settings/account",
      icon: <AccountIcon />,
    },
    {
      label: i18n.t("component.sidebar.menu.profile", "Profile"),
      link: "/settings/profile",
      icon: <ProfileIcon />,
    },
    {
      label: i18n.t("component.sidebar.menu.preferences", "Preferences"),
      link: "/settings/preferences",
      icon: <PreferencesIcon />,
    },
  ],
};
const Sidebar: React.FC<SidebarProps> = ({ path, items }) => {
  console.log(items);

  // const isSidebarExpanded: boolean = useAppSelector(selectIsSidebarExpanded);
  const logoutUser = usePrefetch("logoutUser");

  const dispatch = useAppDispatch();

  //   Active Menu Css
  // const getActiveCss = (link: string) =>
  //   path === link ? `font-medium text-sm ` : "font-medium text-sm";
  return (
    <aside
      className={`w-[240px] overflow-auto dark:bg-background text-foreground dark:text-foreground dark:border-r h-4/6  py-4 hidden md:flex md:flex-col gap-7     cursor-pointer min-h-screen transition-all sticky top-0 `}
    >
      <div className="h-full flex flex-col justify-between min-h-[calc(100vh-6.50rem)] ">
        <nav className="flex flex-col  w-full ">
          {items?.map(
            (item: SidebarItemProps, index: number) =>
              item.link && (
                <Link
                  key={index}
                  to={item.link}
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    "justify-start",
                    "no-underline ",
                    "hover:no-underline",
                    "flex",
                    "gap-1",
                    "rounded-none",
                    "py-6",
                    "",
                    "hover:text-primary"
                  )}
                >
                  <div className="text-xl">{item.icon && item.icon}</div>
                  {item.label}
                </Link>
              )
          )}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
