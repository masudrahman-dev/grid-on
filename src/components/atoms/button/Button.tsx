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
        " inline-flex  items-center justify-center rounded-xl bg-primary px-6 py-[14px]  font-medium text-white transition-colors delay-100 hover:bg-secondary hover:text-dark",
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
