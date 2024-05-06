import { TbError404 } from "react-icons/tb";
import { SiVlcmediaplayer } from "react-icons/si";
import { NavLink } from "react-router-dom";
import Button from "../../stories/Button";
import { BsArrowLeft } from "react-icons/bs";

export default function ErrorPage404() {
  return (
    <div className="w-full h-screen grid place-content-center gap-2 bg-gray-100 gap-[2rem]">
      <div className="flex text-[9rem] items-center justify-center text-danger-normal/70 ">
        <SiVlcmediaplayer className="text-[8rem]" />
        <TbError404 />
      </div>
      <p className="text-2xl text-center">
        <span className="text-danger-normal font-medium">Error 404! </span>
        Page Not Found.
      </p>
      <div className="pt-3 flex gap-2 items-center justify-center ">
        <NavLink
          to="/"
          className="cursor-pointer hover:underline hover:text-primary-dark">
          <Button
            type="primary"
            category="small"
            icon={<BsArrowLeft className="text-xl " />}
            text="back"
            variation="oval-icon"
          />
        </NavLink>
      </div>
    </div>
  );
}
