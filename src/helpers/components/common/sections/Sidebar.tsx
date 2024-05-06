/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import { getUniqueKey } from "../../../../../../Inventory_module/src/utils/methods/stringMethods.ts";
import Logo from "../../../assets/img/Vector.svg";
import { BiChevronDown, BiChevronLeft } from "react-icons/bi";

import {
  Dashboard,
  Inventory,
  People,
  Sales,
  Purcahse,
} from "../../../assets/img/index.ts";

export const Sidebar = () => {
  // Hooks
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const inventorySidebar = () => [
    {
      label: "Dashboard",
      link: `/dashboard`,
      icon: Dashboard,
    },
    {
      label: "Inventory",
      link: `/inventory`,
      icon: Inventory,
    },
    {
      label: "Purchase",
      link: `/purcahse`,
      icon: Purcahse,
    },
    {
      label: "Sales",
      link: `/sales`,
      icon: Sales,
    },
    {
      label: "Customer Retention",
      link: `/customer`,
      icon: People,
    },
  ];

  // Check if navlink equals pathname(window.location.href)

  const defaultCss = "font-medium text-sm";
  const getActiveCss = (link: string) =>
    pathname === link ? `${defaultCss} text-blue-500` : defaultCss;
  //   Active css

  return (
    <aside className="h-full   py-4 hidden md:flex md:flex-col gap-4 justify-start  border-r-[1px] border-primary-100  cursor-pointer">
      <div className="logo flex items-center justify-between text-2xl gap-3 px-5">
        <img src={Logo} alt="enterleaf" className="h-20 w-[150px]" />
        <BiChevronLeft />
      </div>
      <div className="flex flex-col gap-2">
        {inventorySidebar()?.map(({ label, link, icon }: any, idx: number) => (
          <div
            className="flex w-full py-2 px-5 justify-between items-center border-b-2 border-salte-600 gap-2"
            key={getUniqueKey(idx, label)}>
            <div className="flex gap-2 l1-r ">
              <img src={icon} alt="menu icon" />
              <p onClick={() => navigate(link)} className={getActiveCss(link)}>
                {label}
              </p>
            </div>
            {idx != 0 ? <BiChevronDown size={20} /> : ""}
          </div>
        ))}
      </div>
    </aside>
  );
};
