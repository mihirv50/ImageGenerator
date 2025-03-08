import { ReactElement } from "react";

type Variants = "primary" | "secondary";

interface ButtonProps {
  onClick?: () => void;
  variant: Variants;
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
}
const variantStyles = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-green-500 text-white",
};
const sizeStyles = {
  sm: "py-2 px-2 text-sm rounded-sm",
  md: "py-4 px-4 text-md rounded-md",
  lg: "py-6 px-6 text-lg rounded-lg",
};
const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        className={`${variantStyles[props.variant]} ${sizeStyles[props.size]}`}
      >
        {props.startIcon} Generate Image
      </button>
    </div>
  );
};

export default Button;
