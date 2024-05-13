import { Button, ButtonProps } from "@/components/ui/Button/button";
import Input, { InputProps } from "../Input/Input";

export interface ISearchInput {
  inputSize?: InputProps["size"];
  buttonProps?: ButtonProps;
  buttonVariant?: "primary" | "secondary" | "ghost" | "outline";
  label?: string;
  placeholder?: string;
  id: string;
  name: string;
}

const SearchInput: React.FC<ISearchInput> = ({
  inputSize,
  buttonProps,
  label,
  placeholder,
  id,

  name,

  ...props
}) => {
  const getInputSizeClasses = (
    size: InputProps["size"]
  ): string | undefined => {
    const inputSizeToClassMapping = {
      xl: "w-[35rem] h-[3.5rem]",
      lg: "w-[30rem] h-[3rem]",
      md: "w-[25rem] h-[3rem]",
      sm: "w-[14rem] h-[3.2rem]",
      xs: "w-[5rem]",
      default: "w-[20rem]",
    };

    if (!size) return;
    return inputSizeToClassMapping[size];
  };
  const mergedInputClasses = `${getInputSizeClasses(inputSize)} `;

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
        <Input
          {...props}
          name={name}
          id={id}
          type="Search"
          className={`block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ${mergedInputClasses} `}
          placeholder={placeholder}
          required
        />
        <Button
          {...buttonProps}
          className=" absolute end-2.5 top-[50%] translate-y-[-50%]  "
          type="submit">
          {label}
        </Button>
      </div>
    </form>
  );
};

export default SearchInput;
