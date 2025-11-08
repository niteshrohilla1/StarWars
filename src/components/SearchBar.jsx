import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setPage } from "../store/slices/CharactersSlice";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.characters.search);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search character..."
        value={search}
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
          dispatch(setPage(1));
        }}
        className="w-full pr-12 pl-4 py-3 rounded-full  border-2 border-red-500 
bg-red-950/30 text-red-100 placeholder-gray-300
shadow-[0_0_15px_#ef4444] transition-all duration-300 
hover:shadow-[0_0_25px_#ef4444] focus:shadow-[0_0_35px_#dc2626] 
focus:border-red-400 focus:outline-none

"
      />
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 
bg-red-500 text-white rounded-full p-2 
shadow-[0_0_15px_#ef4444] border border-red-400 
transition-all duration-300 
hover:bg-red-600 hover:shadow-[0_0_25px_#ef4444] 
active:shadow-[0_0_35px_#dc2626] focus:outline-none
"
      >
        <FaSearch className="text-lg" />
      </button>
    </div>
  );
}
