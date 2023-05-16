import React from "react";


export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    id: string;
};
export const Input = (props: InputProps) => {
    return (
        <input
            {...props}
            className="outline-none block w-full rounded-sm px-3.5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-sm leading-6"
        />
    );
};

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    id: string;
    children: React.ReactNode;
}
export const Select = (props: SelectProps) => {
    return (
        <select
            {...props}
            className="outline-none block w-full rounded-sm px-3.5 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-sm leading-6"
        >{props.children}</select>
    );
};
