import { Button } from "@/components/Button";
import { SearchBox } from "@/components/organism/SearchBox";
import * as React from "react";

export const Header = () => {
  return (<div>
      <header className="relative z-50">
        <nav className="flex items-center justify-between py-6">
            <a href="/" className="flex flex-1 items-center">
              <img className="h-8 w-auto -m-1.5 p-1.5 pr-4" src="/favicon.ico" alt="" />
            <span>Tap Movies</span>
            </a>
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
