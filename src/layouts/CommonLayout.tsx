import Header from "./Header/Header.tsx";
import "../index.css";
import { Outlet, useLocation } from "react-router-dom";
import { sidebarItems } from "@/utils/constants/sidebar.tsx";
import Sidebar from "@/components/custom/layout/Sidebar/Sidebar.tsx";
import Breadcrumb from "@/components/custom/common/Breadcrumb/Breadcrumb.tsx";
import { useGetWorkspaceQuery } from "@/api/workspace";
import { useGetBookmarkQuery } from "@/api/bookmark.ts";

const CommonLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  const { data: workspaces, isLoading } = useGetWorkspaceQuery("");
  const { data: bookmarks } = useGetBookmarkQuery("");

  if (isLoading) return "Loading...";
  return (
    <div className="relative w-full min-h-screen flex  ">
      <Sidebar items={sidebarItems({ workspaces, bookmarks })} path={path} />

      <div className={`flex flex-col flex-1 `}>
        <div className="z-[100] sticky top-0 flex h-[70px] w-full justify-between  items-center px-8 border-b-2 border-primary-100 bg-background">
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
