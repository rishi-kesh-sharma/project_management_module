import { cn } from "@/lib/utils";
import Input, { InputProps } from "../Input/Input";

export interface ISearchInput {
  inputSize?: InputProps["size"];
  label?: string;
  placeholder?: string;
  id: string;
  className: string;
  name: string;
}

const SearchInput: React.FC<ISearchInput> = ({
  inputSize,
  // buttonProps,
  label,
  placeholder,
  id,
  name,
  className,
  ...props
}) => {
  return (
    <form className=" ">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        {label}
      </label>
      <div className="relative">
        <div className="absolute peer-active:hidden  inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4  text-gray-500 dark:text-gray-400"
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
          name={name}
          id={id}
          type="Search"
          size={inputSize}
          placeholder={placeholder}
          required
          {...props}
          className={cn(`pl-9`, className)}
        />
        {/* <Button
          {...buttonProps}
          className=" absolute end-2.5 top-[50%] translate-y-[-50%]  "
          type="submit">
          {label}
        </Button> */}
      </div>
    </form>
  );
};

export default SearchInput;
