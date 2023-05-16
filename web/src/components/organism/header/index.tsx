import { Button } from "@/components/Button";
import { SearchBox } from "@/components/organism/SearchBox";
import * as React from "react";

export const Header = () => {
  return (<div>
      <header className="relative z-50">
        <nav className="flex items-center justify-between py-6">
          <div className="flex flex-1 items-center">
            <a href="/" className="-m-1.5 p-1.5 pr-4">
              <img className="h-8 w-auto" src="/favicon.ico" alt="" />
            </a>
            <span>Tap Movies</span>
          </div>
          <div className={"flex-1 items-center"}>
            <SearchBox />
          </div>
          <div className="flex flex-1 justify-end gap-3">
            <Button to={'/create'}>Add new Movie</Button>
          </div>
        </nav>
      </header>
    </div>
  );
};
