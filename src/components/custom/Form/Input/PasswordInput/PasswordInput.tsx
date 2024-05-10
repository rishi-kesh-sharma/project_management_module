
import { forwardRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Input, InputProps } from "@/components/ui/Input/input"
import { Button } from "@/components/ui/Button/button"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
interface IPasswordInputProps {
    size: "sm" | "md" | "lg" | "xl" | "default";
    placeholder: string;
    required: boolean;
    label: string;
    onChange: () => void;
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref): React.Fc<IPasswordInputProps> => {
        const [showPassword, setShowPassword] = useState(false)

        console.log(showPassword, "show password");

        const togglePasswordVisibility = () => {
            setShowPassword((prev) => !prev)
        }


        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log("Input value:", event.target.value);
        }

        return (
            <div className="relative">
                <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={props.placeholder}
                    className={cn("hide-password-toggle pr-10", className)}
                    ref={ref}
                    onChange={handleInputChange}
                    {...props}
                />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? (
                        <FaEye className="h-4 w-4" aria-hidden="true" />
                    ) : (
                        <FaEyeSlash className="h-4 w-4" aria-hidden="true" />
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
        )
    },
)

PasswordInput.displayName = "PasswordInput"

export { PasswordInput }