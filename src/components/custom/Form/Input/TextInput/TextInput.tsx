import { Input } from "@/components/ui/Input/input";

interface ITextInputProps {
  size: "sm" | "md" | "lg" | "xl" | "default";
  placeholder: string;
  required: boolean;
  label: string;
  onChange: () => void;
}
function TextInput({ placeholder }): React.Fc<ITextInputProps> {
  return <Input type="text" placeholder={placeholder} />;
}
export default TextInput;
