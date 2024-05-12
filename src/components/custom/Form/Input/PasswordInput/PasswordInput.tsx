import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input/input";
import { Button } from "@/components/ui/Button/button";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { inputVariants } from "@/components/plate-ui/input";
type IPasswordInputProps = {
  size: "sm" | "md" | "lg" | "xl" | "default";
  placeholder: string;
  required: boolean;
  id: string;
  name: string;
  onChange: (e: any) => void;
  className?: string;
  showPassword: boolean;
  setShowPassword: (prev: boolean) => void;
};

const PasswordInput: React.FC<IPasswordInputProps> = (
  {
    className,
    size,
    placeholder,
    required,
    showPassword,
    setShowPassword,
    onChange,
    ...props
  },
  ref
): React.ReactNode => {
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        required={required}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className={cn(
          "hide-password-toggle pr-10",
          inputVariants({ size: size }),
          className
        )}
        ref={ref}
        onChange={onChange}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={togglePasswordVisibility}>
        {showPassword ? (
          <FaEye className="h-4 w-4" aria-hidden="true" />
        ) : (
          <FaEyeSlash className="h-4 w-4 text-gray-400" aria-hidden="true" />
        )}
        <span className="sr-only">
          {showPassword ? "Hide password" : "Show password"}
        </span>
      </Button>

      <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
    </div>
  );
};

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
