import Input, { InputProps } from "@/components/custom/common/Input/Input";
import { cn } from "@/lib/utils";

interface ITextInputProps {
  size?: InputProps["size"];
  placeholder?: string;
  required?: boolean;
  label?: string;
  name: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextInput: React.FC<ITextInputProps> = ({
  placeholder,
  size,
  required = false,
  name,
  id,
  onChange,
  className,
  ...props
}) => {
  return (
    <Input
      {...props}
      type="text"
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      name={name}
      id={id}
      size={size}
      className={`${cn(className)}`}
    />
  );
};
export default TextInput;
