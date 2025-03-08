import { ReactElement } from "react";

type Variants = "primary" | "secondary";

interface ButtonProps {
  onClick?: () => void;
  variant: Variants;
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  text: string;
}
const variantStyles = {
  primary: "bg-blue-600 text-white rounded-md",
  secondary: "bg-blue-400 text-white rounded-full",
};
const sizeStyles = {
  sm: "py-2 px-2 text-sm",
  md: "py-4 px-4 text-md ",
  lg: "py-6 px-6 text-lg",
};
const defaultStyles = " flex items-center justify-center gap-2";

const shapeStyle = "rounded-3xl outline-none"
const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        className={`${variantStyles[props.variant]} ${
          sizeStyles[props.size]
        } ${defaultStyles} ${shapeStyle}`}
      >
        {props.startIcon} {props.text}
      </button>
    </div>
  );
};

export default Button;
