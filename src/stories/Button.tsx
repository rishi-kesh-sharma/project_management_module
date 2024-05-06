// Button.tsx

import React from "react";

// Define the structure of the controls that we need as a interface/type
export interface ButtonProps {
  category: "large" | "medium" | "small";
  type: "primary" | "secondary" | "tertiary";
  variation:
    | "default"
    | "hover"
    | "icon"
    | "disabled"
    | "disabled-icon"
    | "oval-icon";
  text?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

// Construct a function based component for component and pass the props as the type of specific component
const Button: React.FC<ButtonProps> = ({
  category,
  type,
  variation,
  text = "Button",
  icon,
  disabled = false,
  onClick,
}) => {
  // Construct an individual function having switch cases to provide the style based on the cases
  const getButtonCategoryCss = (category: string) => {
    switch (category) {
      case "large":
        return "w-[160px] h-[64px] px-[32px] py-[20px] rounded-[4px]";
      case "medium":
        return "w-[130px] h-[48px] px-[20px] py-[20px] rounded-[4px]";
      case "small":
        return "w-[120px] h-[40px] px-[10px] py-[20px] rounded-[4px]";
      default:
        return "";
    }
  };
  const getButtonTypeCss = (type: string) => {
    switch (type) {
      case "primary":
        return "bg-[#0E84ED] text-[#FFFFFF] border-2 border-[#0E84ED]";
      case "secondary":
        return "text-[#0E84ED] bg-[#FFFFFF] border-2 border-[#0E84ED]";
      case "tertiary":
        return "text-gray-700 bg-blue-50 border-2 border-[#0E84ED] border-none";
      default:
        return "";
    }
  };
  const getButtonVariationCss = (variation: string) => {
    switch (variation) {
      case "hover":
        return "hover:bg-[#0B6ABE] hover:text-[#FFFFFF] hover:border-[#0B6ABE]";
      case "icon":
        return "text-[#FFFFFF] flex justify-center items-center gap-2";
      case "disabled":
        return "bg-[#E9E9E9] text-[#737A81] border-[#E9E9E9] cursor-not-allowed";
      case "disabled-icon":
        return "bg-[#E9E9E9] text-[#737A81] border-[#E9E9E9] flex justify-center items-center gap-4 cursor-not-allowed";
      case "oval-icon":
        return "text-[#FFFFFF] flex justify-center items-center gap-2 rounded-3xl ";

      default:
        return "";
    }
  };
  // At last pass all the css cases into the main class name as needed
  const buttonClass = `button flex items-center justify-center bg-primary ${getButtonCategoryCss(
    category
  )} ${getButtonTypeCss(type)} ${getButtonVariationCss(variation)}`;

  // Finally return the component to render
  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {icon && (
        <span
          className={`icon bg-[#0E84ED] ${variation === "oval-icon" && "p-1 rounded-full text-white-light "}`}>
          {icon}
        </span>
      )}

      {text}
    </button>
  );
};

export default Button;
