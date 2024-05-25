import { cn } from "@/lib/utils";
import Input from "../FormElements/Input/Input/Input";
import { ISearchInput } from "@/@types";

const SearchInput: React.FC<ISearchInput> = ({
  inputSize,
  label,
  placeholder,
  id,
  name,
  className,
  onSubmit,
  ...props
}) => {
  return (
    <form onSubmit={onSubmit} className=" ">
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
      </div>
    </form>
  );
};

export default SearchInput;
