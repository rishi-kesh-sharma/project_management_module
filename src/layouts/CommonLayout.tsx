import Header from "./Header.tsx";
import "../index.css";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "@/components/custom/layout/Sidebar/Sidebar.tsx";
import { sidebarItems } from "@/utils/constants/sidebar.tsx";
export type CommonLayoutProps = {
  type: "small" | "large";
};

const CommonLayout = ({ type }: CommonLayoutProps) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="relative w-full h-screen grid grid-cols-12">
      {type === "large" ? (
        <Sidebar items={sidebarItems()} path="" type="large" />
      ) : (
        <Sidebar path={path} items={sidebarItems()} type="small" />
      )}

      <div
        className={`${
          type === "large" ? "col-span-10" : "col-span-11"
        } flex flex-col `}>
        <div className="z-[100] sticky top-0 flex h-[70px] w-full justify-between  items-center px-8 border-b-2 border-primary-100 bg-[#ffffff]">
          <Header />
        </div>
        <div className="justify-end items-center max-h-[calc(100vh-56px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default CommonLayout;
