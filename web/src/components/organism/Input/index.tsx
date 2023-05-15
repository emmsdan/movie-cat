import {Input, InputProps} from "@/components/atom/Form/Input";
import { Label } from "@/components/atom/Form/Label";
import {SearchIcon} from "@/components/atom/Icon/Search";
import React from "react";

type InputFieldProps = InputProps & {
  id: string;
  label?: string;
  icon?: React.ReactNode;
};
export const InputField = ({ id, label, ...props }: InputFieldProps) => {
  return (
    <>
      <div>
        {label && <Label id={id} label={label} />}
        <div className="mt-2.5 relative">
          <Input {...props} id={id} />
          {props.icon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {props.icon}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
