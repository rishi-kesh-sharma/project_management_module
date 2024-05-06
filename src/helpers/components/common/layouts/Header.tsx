import { IoMdNotificationsOutline } from "react-icons/io";
import Button from "../../../../stories/Button";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-5 items-center justify-between px-2 w-full">
      <Link to={"/project/create"}>
        <Button
          category="small"
          type="tertiary"
          variation="oval-icon"
          text="Create"
          icon={<BiPlus />}
        />
      </Link>

      <div className="flex gap-5 items-center px-2">
        <div className="text-2xl">
          <IoMdNotificationsOutline />
        </div>
        <div className="flex gap-2 items-center font-poppins font-medium text-[14px] leading-5">
          <div className="flex h-10 w-10 bg-blue-600 rounded-full justify-center items-center text-white-light">
            U
          </div>
          <p>User</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
