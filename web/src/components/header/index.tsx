import { Button } from "@/components/Button";
import {SearchBox} from "@/components/organism/SearchBox";
import {InputField} from "../organism/Input";
import * as React from "react";
import styles from "./style.module.scss";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 px-8"
      >
        <div className="flex flex-1 items-center">
          <a href="/" className="-m-1.5 p-1.5 pr-4">
            <img
              className="h-8 w-auto"
              src="/favicon.ico"
              alt=""
            />
          </a>
          <span>The Movie</span>
        </div>
        <div className={'flex-1 items-center'}>
          <SearchBox />
        </div>
        <div className="flex flex-1 justify-end gap-3">
          <Button to="#">Add new Movie</Button>
        </div>
      </nav>
    </header>
  );
};
