import { MovieItemProps } from "@/components/molecule/Movie/Item";
import * as React from "react";

export const MovieDetails = ({
  url,
  image,
  title,
  overview,
}: MovieItemProps) => {
  const imagePath = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${image}`;
  return (
    <div className="hover:p-2 w-52 opacity-95 hover:opacity-100 transition ease-in-out duration-150 rounded overflow-hidden shadow-lg m-4 ml-0 flex justify-between cursor-pointer">
      <img
        className="w-full"
        src={imagePath}
        alt="A Quiet Place movie poster"
      />
    </div>
  );
};
