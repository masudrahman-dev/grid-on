import React, { ReactNode, forwardRef } from "react";
import clx from "../../utils/clx";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type, className }, ref) => (
    <button
      ref={ref}
      className={clx(
        " inline-flex  items-center justify-center rounded-xl bg-blue-light px-6 py-[14px]  font-medium text-primary transition-colors delay-100 hover:bg-primary hover:text-white",
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
