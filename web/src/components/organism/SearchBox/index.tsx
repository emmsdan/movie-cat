import { Input, InputProps } from "@/components/atom/Form/Input";
import { Label } from "@/components/atom/Form/Label";
import { SearchIcon } from "@/components/atom/Icon/Search";
import {List} from "@/components/molecule/List";
import { InputField } from "../Input";
import React from "react";

type InputFieldProps = InputProps & {
  id: string;
  label?: string;
};
export const SearchBox = () => {
  return (
    <section role={"search"} className={"relative"}>
      <InputField
        type={"search"}
        id="search"
        placeholder="Search"
        icon={<SearchIcon />}
      />
      <List items={[{label: "test"}]} />
    </section>
  );
};
