import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/slices/CharactersSlice";

export default function FilterBar() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.characters.filters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-4 bg-black/40 backdrop-blur-lg p-3 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-blue-400/30">
      {[
        {
          name: "homeworld",
          label: "All Homeworlds",
          options: ["Tatooine", "Alderaan", "Naboo", "Coruscant", "Kamino"],
        },
        {
          name: "film",
          label: "All Films",
          options: [
            "A New Hope",
            "The Empire Strikes Back",
            "Return of the Jedi",
            "The Phantom Menace",
            "Attack of the Clones",
            "Revenge of the Sith",
          ],
        },
        {
          name: "species",
          label: "All Species",
          options: ["Human", "Droid", "Wookiee", "Twi'lek", "Hutt", "Rodian"],
        },
      ].map((filter) => (
        <div key={filter.name} className="relative">
          <select
            name={filter.name}
            value={filters[filter.name]}
            onChange={handleFilterChange}
            className="
              appearance-none
              bg-black/60
              border border-blue-400/60
              text-blue-100
              text-sm
              px-4 py-2.5
              pr-8
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              hover:bg-black/70
              transition-all
              duration-200
              cursor-pointer
              shadow-[0_0_10px_rgba(59,130,246,0.3)]
            "
            style={{
              boxShadow: "0 0 10px rgba(59,130,246,0.3)",
            }}
          >
            <option value="">{filter.label}</option>
            {filter.options.map((opt) => (
              <option
                key={opt}
                value={opt}
                className="bg-black text-blue-300 hover:bg-blue-900"
              >
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
