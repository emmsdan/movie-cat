import React from "react";

export const Label = ({ id, label }: { id: string; label: string }) => {
  return (
    <label
      htmlFor={id}
      className="block text-sm font-semibold leading-6 text-gray-900"
    >
      {label}
    </label>
  );
};
