import { SidebarProps } from "@/@types";
import * as React from "react";

import { useAppSelector } from "@/hooks";
import { selectIsSidebarExpanded, } from "@/redux/features/app/appSlice";
import SidebarBrand from "./SidebarBrand";
import SidebarMenuList from "./SidebarMenuList";
const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const isSidebarExpanded: boolean = useAppSelector(selectIsSidebarExpanded);
  return (
    <aside
      className={` ${isSidebarExpanded ? "w-[200px]" : "w-[70px]"} overflow-auto bg-primary dark:bg-background text-primary-foreground dark:text-foreground dark:border-r h-full   py-4 hidden md:flex md:flex-col gap-7 cursor-pointer min-h-screen transition-all sticky top-0 `}>
      <SidebarBrand />
      <SidebarMenuList items={items} />
    </aside>
  );
};

export default Sidebar;
