import React, { FC, InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: FC<IInputProps> = ({ className, ...props }) => (
  <input className={`input ${className}`} type="text" {...props} />
);
