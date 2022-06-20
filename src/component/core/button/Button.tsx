import React, { ButtonHTMLAttributes, FC } from "react";
import "./Button.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <button className={`primary-btn ${className}`} {...props}>
      {children}
    </button>
  );
};
