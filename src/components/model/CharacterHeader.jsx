import React from "react";

export default function CharacterHeader({ person }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-6">
      <img
        src={person.imageUrl}
        alt={person.name}
        className="w-52 h-52 sm:w-64 sm:h-64 object-cover rounded-2xl border border-blue-400/40 shadow-[0_0_30px_10px_rgba(59,130,246,0.5)]"
      />
      <h2 className="text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 animate-text-glow">
        {person.name}
      </h2>
    </div>
  );
}
