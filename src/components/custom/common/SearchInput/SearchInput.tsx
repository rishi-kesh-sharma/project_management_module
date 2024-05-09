import { Button } from "@/components/ui/Button/button";
import React from "react";

export interface ISearchInput {
  inputSize: "sm" | "md" | "lg" | "xl" | "default";
  buttonSize: "sm" | "md" | "lg" | "default";
  //   buttonSize: string;
  buttonVariant: "primary" | "secondary" | "ghost" | "outline";
  label: string;
  placeholder: string;
}

const SearchInput: React.FC<ISearchInput> = ({
  inputSize,
  buttonVariant,
  buttonSize,
  label,
  placeholder,
}) => {
  const getInputSizeClasses = (size: string) => {
    const inputSizeToClassMapping = {
      xl: "w-[25rem]",
      lg: "w-[20rem]",
      md: "w-[15rem]",
      sm: "w-[10rem]",
      xs: "w-[5rem]",
    };

    return inputSizeToClassMapping[size];
  };
  const mergedInputClasses = `${getInputSizeClasses(inputSize)} `;

  //   const getButtonSizeClasses = (inputSize: string) => {
  //     const buttonSizeToClassMapping = {
  //       lg: "w-[10rem]",
  //       md: "w-[7rem]",
  //       sm: "w-[4rem]",
  //     };

  //     return buttonSizeToClassMapping[inputSize];
  //   };

  //   const mergedButtonClasses = `${getButtonSizeClasses(buttonSize)} `;
  return (
    <form className=" mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ${mergedInputClasses} `}
          placeholder={placeholder}
          required
        />
        <Button
          size={buttonSize}
          variant={buttonVariant}
          className=" absolute end-2.5 top-[50%] translate-y-[-50%]  "
          type="submit">
          {label}
        </Button>
      </div>
    </form>
  );
};

export default SearchInput;
