import React from "react";
import NavbarItem from "./NavbarItem";
import SearchBox from "./SearchBox";

export default function Navbar() {
  return (
    <div className="py-4 sm:px-12 flex flex-col gap-4 sm:flex-row justify-center items-center lg:text-lg  dark:bg-gray-700 bg-sky-200">
      <div className="w-full sm:w-2/3 flex ">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
      <div className="w-full">
        <SearchBox />
      </div>
    </div>
  );
}
