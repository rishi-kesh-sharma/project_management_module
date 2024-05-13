import Header from "./Header/Header.tsx";
import "../index.css";
import { Outlet, useLocation } from "react-router-dom";
import { sidebarItems } from "@/utils/constants/sidebar.tsx";
import { userInfo } from "@/utils/constants/index.tsx";
import NestedSidebar from "@/components/custom/layout/NestedSidebar/NestedSidebar.tsx";
export type CommonLayoutProps = {
  type: "small" | "large";
};

const CommonLayout = ({ type }: CommonLayoutProps) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="relative w-full h-screen grid grid-cols-12">
      <div className="col-span-3 lg:col-span-2 2xl:col-span-1 min-h-[100vh] bg-primary ">
        <NestedSidebar items={sidebarItems()} path={path} type={type} />
      </div>

      <div
        className={`${
          type === "large"
            ? "col-span-9 lg:col-span-10 2xl:col-span-11"
            : "col-span-11"
        } flex flex-col `}>
        <div className="z-[100] sticky top-0 flex h-[70px] w-full justify-between  items-center px-8 border-b-2 border-primary-100 bg-[#ffffff]">
          <Header user={userInfo} />
        </div>
        <div className="justify-end items-center max-h-[calc(100vh-56px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default CommonLayout;
