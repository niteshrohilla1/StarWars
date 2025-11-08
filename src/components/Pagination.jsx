import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/slices/CharactersSlice";

export default function Pagination({ next, previous }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.characters.page);

  return (
    <div className="flex justify-center items-center gap-6 mt-10">
      <button
        onClick={() => dispatch(setPage(page - 1))}
        disabled={!previous}
        className={`px-5 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform 
          ${previous
            ? "bg-red-600 text-white hover:scale-105 hover:shadow-lg"
            : "bg-gray-200 text-gray-500 cursor-not-allowed opacity-70"
          }`}
      >
        ← Prev
      </button>
      <div className="relative">
        <span className="px-5 py-2.5 rounded-full bg-transparent text-gray-200 font-bold shadow-md border border-white/30">
          Page {page}
        </span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/40 to-red-400/40 blur-md -z-10"></div>
      </div>
      <button
        onClick={() => dispatch(setPage(page + 1))}
        disabled={!next}
        className={`px-5 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 transform 
          ${next
            ? "bg-red-600 text-white hover:scale-105 hover:shadow-lg"
            : "bg-gray-200 text-gray-500 cursor-not-allowed opacity-70"
          }`}
      >
        Next →
      </button>
    </div>
  );
}
