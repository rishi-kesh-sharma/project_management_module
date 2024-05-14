import Header from "./Header/Header.tsx";
import "../index.css";
import { Outlet, useLocation } from "react-router-dom";
import { sidebarItems } from "@/utils/constants/sidebar.tsx";
import NestedSidebar from "@/components/custom/layout/NestedSidebar/NestedSidebar.tsx";
import Breadcrumb from "@/components/custom/common/Breadcrumb/Breadcrumb.tsx";

const CommonLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="relative w-full min-h-screen flex  ">
      <NestedSidebar items={sidebarItems()} path={path} />

      <div className={`flex flex-col flex-1 `}>
        <div className="z-[100] sticky top-0 flex h-[70px] w-full justify-between  items-center px-8 border-b-2 border-primary-100 bg-[#ffffff]">
          <Header />
        </div>

        <div className="w-full px-[2rem] py-[1rem]">
          <div>
            <Breadcrumb />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default CommonLayout;
