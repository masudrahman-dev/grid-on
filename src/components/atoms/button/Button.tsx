import React, { ReactNode, forwardRef } from "react";
import clx from "../../utils/clx";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type, className, onClick }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className={clx(
        " inline-flex  items-center justify-center rounded-xl bg-blue-light px-6 py-[14px] font-medium  text-primary  transition-colors  duration-300 ease-in-out hover:bg-primary hover:text-white",
        className,
      )}
      type={type}
    >
      {children}
    </button>
  ),
);

Button.defaultProps = {
  type: "button",
};

export default Button;
