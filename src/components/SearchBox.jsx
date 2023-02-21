"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        className=" w-full h-14 flex-1 placeholder:text-gray-500 X outline-none rounded-lg bg-blue-100 dark:bg-slate-900 px-4"
        type="text"
        placeholder="Search keyword..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        disabled={!search}
        className="absolute right-4 top-2  p-2 disabled:text-gray-400 text-sky-700 ml-4  border-slate-600   hover:scale-125 transition-transform duration-300 hover:text-slate-900  z-20"
        type="submit"
      >
        {/* Search */}
        <BiSearch size={34} />
      </button>
    </form>
  );
}
