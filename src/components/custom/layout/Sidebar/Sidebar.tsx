// import { getUniqueKey } from "@/utils/methods/stringMethods";
import config from "@/config";
import {
  AccountIcon,
  LeftAngularArrowIcon,
  LogoutIcon,
  RightAngularArrowIcon,
  SettingIcon,
  // SettingIcon,
} from "@/components/icons/commonIcons";
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

const settings = {
  label: "Settings",
  icon: <SettingIcon />,
  items: [
    { label: "My Account", link: "/my-account", icon: <AccountIcon /> },
    { label: "Profile", link: "/profile", icon: <AccountIcon /> },
  ],
};
const Sidebar: React.FC<SidebarProps> = ({ path, items }) => {
  const isSidebarExpanded: boolean = useAppSelector(selectIsSidebarExpanded);

  const dispatch = useAppDispatch();

  const handleCollapse = () => {
    console.log("collapsed");
    dispatch(collapseSidebar());
  };
  const handleExpand = () => {
    dispatch(expandSidebar());
  };
  console.log(path);
  //   Active Menu Css
  // const getActiveCss = (link: string) =>
  //   path === link ? `font-medium text-sm ` : "font-medium text-sm";
  return (
    <aside
      className={` ${isSidebarExpanded ? "w-[240px]" : "w-[70px]"}  bg-primary dark:bg-background text-[#FFFFFF] h-full   py-4 hidden md:flex md:flex-col gap-7  border-r-[1px] border-primary-100  cursor-pointer min-h-screen transition-all sticky top-0 `}>
      <div className="logo flex items-center justify-between text-2xl gap-3 w-full ">
        {isSidebarExpanded && (
          <Link to={`/`}>
            <img
              src={config.LOGO}
              alt={config.APP_NAME}
              className=" object-contain justify-self-end ml-5"
            />
          </Link>
        )}
        {isSidebarExpanded ? (
          <LeftAngularArrowIcon onClick={handleCollapse} className="mr-4" />
        ) : (
          <RightAngularArrowIcon
            onClick={handleExpand}
            className=" ml-auto mr-4"
          />
        )}
      </div>
      <div className="h-full flex flex-col justify-between min-h-[calc(100vh-6.50rem)] ">
        <nav className="flex flex-col  w-full ">
          {items?.map((item: SidebarItemProps, index: number) =>
            item.items ? (
              <Accordion type="single" className="" collapsible>
                <AccordionItem
                  className="flex flex-col gap-0 w-full h-full"
                  value={item.label}>
                  <AccordionTrigger
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      }),
                      "justify-between",
                      "border-b-1 border-white flex py-6  w-full rounded-none gap-0 no-underline hover:no-underline   ",
                      "hover:text-primary"
                    )}>
                    <div className="flex items-center justify-start w-full gap-1 ">
                      {item.icon && item.icon}
                      {isSidebarExpanded && item.label}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-primary dark:bg-background/10 py-0 ">
                    <div className="flex flex-col ">
                      {item.items.map(
                        (child: SidebarItemProps, index: number) => (
                          <Link
                            key={index}
                            to={child.link || "/"}
                            className={cn(
                              buttonVariants({
                                size: "sm",

                                variant: "ghost",
                              }),
                              "justify-start",
                              "no-underline ",
                              "hover:no-underline",
                              "active::no-underline",
                              "flex",
                              "gap-2",
                              "border-b-2 rounded-none  border-white  last-of-type:border-none p-6",
                              "hover:text-primary"

                              //   child.disabled && "cursor-not-allowed opacity-80"
                            )}>
                            {item.icon}
                            {isSidebarExpanded && child.label}
                          </Link>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
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
                    "border-b-2",
                    "hover:text-primary"
                  )}>
                  {item.icon && item.icon}
                  {isSidebarExpanded && item.label}
                </Link>
              )
            )
          )}
        </nav>

        <div className="flex flex-col justify-center  font-semibold  mt-[2rem] w-full">
          <Accordion type="single" className="" collapsible>
            <AccordionItem
              className="flex flex-col gap-0 w-full h-full "
              value={settings.label}>
              <AccordionTrigger
                className={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  }),
                  "justify-between",
                  "border-b-1 border-white flex py-7  w-full rounded-none gap-0 no-underline hover:no-underline   ",
                  "hover:text-primary"
                )}>
                <div className="flex items-center justify-start w-full gap-1 ">
                  {settings.icon && settings.icon}
                  {isSidebarExpanded && settings.label}
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-primary dark:bg-background/10 py-0 ">
                <div className="flex flex-col ">
                  {settings.items.map((child, index: number) => (
                    <Link
                      key={index}
                      to={child.link || "/"}
                      className={cn(
                        buttonVariants({
                          size: "sm",

                          variant: "ghost",
                        }),
                        "justify-start",
                        "no-underline ",
                        "hover:no-underline",
                        "active::no-underline",
                        "flex",
                        "gap-2",
                        "border-b-2 rounded-none  border-white  last-of-type:border-none p-6",
                        "hover:text-primary"

                        //   child.disabled && "cursor-not-allowed opacity-80"
                      )}>
                      {child.icon}
                      {isSidebarExpanded && child.label}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex items-center pl-4 gap-1 hover:text-primary hover:bg-white dark:hover:bg-primary/15 py-4 text-sm  ">
            <LogoutIcon className="" />
            {isSidebarExpanded && "Log out"}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
