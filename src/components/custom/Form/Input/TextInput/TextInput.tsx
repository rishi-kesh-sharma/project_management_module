import { Input } from "@/components/ui/Input/input";

interface ITextInputProps {
  size: "sm" | "md" | "lg" | "xl" | "default";
  placeholder: string;
  required: boolean;
  label: string;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const TextInput: React.FC<ITextInputProps> = ({
  placeholder,
  size,
  required = false,
  name,
  id,
  onChange,
  ...props
}) => {
  const sizeToClassMapping = {
    sm: "w-[8rem]",
    md: "w-[15rem]",
    lg: "w-[20rem]",
    xl: "w-[25rem]",
    default: "w-[10rem]",
  };

  const getSizeClasses = (size: string) => {
    return sizeToClassMapping[size];
  };

  const mergedClasses = `${getSizeClasses(size)}`;
  return (
    <Input
      type="text"
      placeholder={placeholder}
      className={mergedClasses}
      required={required}
      onChange={onChange}
      name={name}
      id={id}
      {...props}
    />
  );
};
export default TextInput;
