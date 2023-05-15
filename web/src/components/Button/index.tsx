import clsx from "clsx";
import * as React from "react";

type ButtonProps = {
  to?: string;
  children: string | React.ReactNode;
  onClick?: () => void;
  outline?: boolean;
};
export const Button = ({ to, children, onClick, outline }: ButtonProps) => {
  const className = clsx({
    "text-xs rounded-sm font-semibold leading-6 px-3.5 py-1.5": true,
    "text-gray-950 hover:bg-gray-800 border-x border-y border-zinc-300":
      outline,
    "text-white bg-gray-950 hover:bg-gray-800  border-0": !outline,
  });
  return to ? (
    <a href={to} className={className}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
