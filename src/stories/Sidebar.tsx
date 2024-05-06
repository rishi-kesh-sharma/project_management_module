import { useLocation, useNavigate } from "react-router-dom";
import { getUniqueKey } from "../utils/methods/stringMethods";
import Logo from "../helpers/assets/img/Vector.svg";
import { BiChevronDown, BiChevronLeft } from "react-icons/bi";
import {
  MdOutlineAnalytics,
  MdOutlineDashboard,
  MdOutlineSettings,
  MdOutlineTask,
} from "react-icons/md";
import { Logout } from "../helpers/assets/img";
import { HiOutlineChartBar } from "react-icons/hi2";
import { FaRegCircleDot } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";

export interface SidebarProps {
  type: "small" | "large";
}

const Sidebar: React.FC<SidebarProps> = ({ type }) => {
  // Hooks
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // Menu Data
  const projectManagementSidebar = () => [
    {
      label: "Home ",
      link: `/dashboard`,
      icon: <TiHomeOutline />,
    },
    {
      label: "Overview",
      link: `/overview`,
      icon: <MdOutlineDashboard />,
    },
    {
      label: "Analystic",
      link: `/analystic`,
      icon: <MdOutlineAnalytics />,
    },
    {
      label: "Tasks",
      link: `/tasks`,
      icon: <MdOutlineTask />,
    },
    {
      label: "Plannings",
      link: `/plannings`,
      icon: <HiOutlineChartBar />,
    },
    {
      label: "Progress",
      link: `/progress`,
      icon: <HiOutlineChartBar />,
    },
    {
      label: "Goals",
      link: `/goals`,
      icon: <FaRegCircleDot />,
    },
    {
      label: "Settings",
      link: `/setting`,
      icon: <MdOutlineSettings />,
    },
  ];
  //   Active Menu Css
  const getActiveCss = (link: string) =>
    pathname === link ? `font-medium text-sm ` : "font-medium text-sm";
  return type === "large" ? (
    <aside className="col-span-2 bg-[#0E84ED] text-[#FFFFFF] h-full w-full  py-4 hidden md:flex md:flex-col gap-4  border-r-[1px] border-primary-100  cursor-pointer">
      <div className="logo flex items-center justify-between text-2xl gap-3 px-5 ">
        <img src={Logo} alt="enterleaf" className=" object-contain" />
        <BiChevronLeft />
      </div>
      <div className="flex flex-col gap-2 flex-1 py-2 ">
        {projectManagementSidebar()?.map(
          (
            { label, link, icon }: { label: string; link: string; icon: any },
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
              {idx != 0 ? <BiChevronDown size={20} /> : ""}
            </div>
          )
        )}
      </div>
      <div className="flex py-2 px-5 gap-2 text-sm">
        <img className="h-5 w-5" src={Logout} alt="Logout" />
        Log out
      </div>
    </aside>
  ) : (
    <aside className="col-span-1 bg-[#0E84ED] text-[#FFFFFF] h-full w-full  py-4 hidden md:flex md:flex-col gap-4  border-r-[1px] border-primary-100  cursor-pointer">
      <div className="logo flex items-center justify-between text-2xl gap-3 px-5">
        <img src={Logo} alt="enterleaf" className="h-20 w-[150px] " />
        <BiChevronLeft />
      </div>
      <div className="flex flex-col gap-2 flex-1 ">
        {projectManagementSidebar()?.map(
          ({ label, icon }: { label: string; icon: any }, idx: number) => (
            <div
              className="flex w-full py-2 px-5 justify-between items-center border-b-[1px] border-gray-50 gap-2"
              key={getUniqueKey(idx, label)}>
              <div className="flex gap-2 l1-r ">{icon}</div>
              {idx != 0 ? <BiChevronDown size={20} /> : ""}
            </div>
          )
        )}
      </div>
      <div className="flex py-2 px-5 gap-2 text-sm">
        <img className="h-5 w-5" src={Logout} alt="Logout" />
        {/* Log out */}
      </div>
    </aside>
  );
};

export default Sidebar;
