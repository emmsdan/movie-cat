import * as React from "react";

export type MovieItemProps = {
    url: string;
    image: string;
    title: string;
    description: string;
    onClick?: (item: any) => void;
    poster: string;
}
export const MovieItem = ({image, onClick, ...props}: MovieItemProps ) => {
  return (
    <div onClick={()=> onClick?.({...props, image, onClick})} className="hover:p-2 w-52 opacity-95 hover:opacity-100 transition ease-in-out duration-150 rounded overflow-hidden shadow-lg m-4 ml-0 flex justify-between cursor-pointer">
      <img
        className="w-full"
        src={image}
        alt="A Quiet Place movie poster"
      />
    </div>
  );
};
