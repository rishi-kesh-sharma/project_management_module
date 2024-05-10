import { Button, ButtonProps } from "@/components/ui/Button/button";
import React from "react";

interface ISubmitButton extends ButtonProps {

}
const SubmitButton:React.FC<ISubmitButton> = (props) => {
  return (
    <div>
      <Button type={"submit"} {...props}  />
    </div>
  );
};

export default SubmitButton;
