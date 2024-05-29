import React from "react";
import { CrossIcon, ExpandIcon } from "../icons/commonIcons";

export interface IWidgetWrapper {
  children: React.ReactNode;
}
const WidgetWrapper: React.FC<IWidgetWrapper> = ({ children }) => {
  return (
    <div className="relative group ">
      <div className="absolute top-[0.7rem] right-[0.5rem]  items-center hidden text-gray-500 gap-[1rem]   group-hover:flex transition-all ">
        <ExpandIcon className="cursor-pointer " />
        <CrossIcon className={"cursor-pointer"} />
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default WidgetWrapper;
