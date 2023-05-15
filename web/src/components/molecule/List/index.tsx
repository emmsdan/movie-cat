import React from "react";

export type ListProps = {
  items: Array<{ label: string; id?: string }>;
};
export const List = ({ items }: ListProps) => {
  return (
      items?.length === 0 ? null :
    <ul
      className="absolute right-0 left-0 w-full z-10 mt-1 origin-top rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
    >
      {items?.map((item, index: number) => (
        <li
          role="menuitem"
          tabIndex={-1}
          id={item.id ?? "list-item-" + index}
          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
