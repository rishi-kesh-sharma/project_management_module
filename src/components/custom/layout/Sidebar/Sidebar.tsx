import { getUniqueKey } from "@/utils/methods/stringMethods";
import React from "react";
import { useNavigate } from "react-router";
import config from "@/config";
import {
  DownAngularArrowIcon,
  LeftAngularArrowIcon,
  LogoutIcon,
} from "@/components/icons";

export interface SidebarItemProps {
  label: string;
  link: string;
  icon: React.ReactElement;
  items?: SidebarItemProps[];
}
export interface SidebarProps {
  type: "small" | "large";
  path: string;
  items: SidebarItemProps[];
}

const Sidebar: React.FC<SidebarProps> = ({ type, path, items }) => {
  const navigate = useNavigate();

  //   Active Menu Css
  const getActiveCss = (link: string) =>
    path === link ? `font-medium text-sm ` : "font-medium text-sm";
  return type === "large" ? (
    <aside className="col-span-2 bg-[#0E84ED] bg-primary text-[#FFFFFF] h-full w-full  py-4 hidden md:flex md:flex-col gap-4  border-r-[1px] border-primary-100  cursor-pointer">
      <div className="logo flex items-center justify-between text-2xl gap-3 px-5 ">
        <img src={config.LOGO} alt="enterleaf" className=" object-contain" />
        <LeftAngularArrowIcon />
      </div>
      <div className="flex flex-col gap-2 flex-1 py-2 ">
        {items?.map(
          (
            {
              label,
              link,
              icon,
            }: { label: string; link: string; icon: React.ReactElement },
            idx: number
          ) => (
            <div
              className="flex w-full py-2 px-5 justify-between items-center border-b-[1px] border-gray-50 gap-2"
              key={getUniqueKey(idx, label)}>
              <div className="flex gap-2 l1-r ">
                {icon}
                <p
                  onClick={() => navigate(link)}
                  className={getActiveCss(link)}>
                  {label}
                </p>
              </div>
              {idx != 0 ? <DownAngularArrowIcon size={20} /> : ""}
            </div>
          )
        )}
      </div>
      <div className="flex py-2 px-5 gap-2 text-sm items-center">
        <LogoutIcon className="text-[1.5rem]" />
        Log out
      </div>
    </aside>
  ) : (
    <aside className="col-span-1 bg-[#0E84ED] text-[#FFFFFF] h-full w-full max-w-[100px] py-4 hidden md:flex md:flex-col gap-4  border-r-[1px] border-primary-100  cursor-pointer">
      <div className="logo flex items-center justify-between text-2xl gap-3 px-5">
        {/* <img src={Logo} alt="enterleaf" className="h-20 w-[150px] " /> */}
        <LeftAngularArrowIcon />
      </div>
      <div className="flex flex-col gap-2 flex-1 ">
        {items?.map(
          (
            { label, icon }: { label: string; icon: React.ReactElement },
            idx: number
          ) => (
            <div
              className="flex w-full py-2 px-5 justify-between items-center border-b-[1px] border-gray-50 gap-2"
              key={getUniqueKey(idx, label)}>
              <div className="flex gap-2 l1-r ">{icon}</div>
              {idx != 0 ? <DownAngularArrowIcon size={20} /> : ""}
            </div>
          )
        )}
      </div>
      <div className="flex py-2 px-5 gap-2 text-sm text-center">
        <LogoutIcon className="text-[1.5rem]" />
        {/* Log out */}
      </div>
    </aside>
  );
};

export default Sidebar;
