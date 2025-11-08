import React from "react";

export default function CharacterName({ person }) {
  return (
    <div className="mt-3 flex justify-center">
      <div
        className="px-5 py-2 rounded-full backdrop-blur-sm bg-black/40 shadow-lg transition-all duration-300"
        style={{
          border: `1px solid ${person.accentColor}80`,
          boxShadow: `0 0 20px ${person.accentColor}80`,
        }}
      >
        <h3
          className="text-lg font-semibold text-white tracking-wide text-center"
          style={{
            textShadow: `0 0 15px ${person.accentColor}`,
          }}
        >
          {person.name}
        </h3>
      </div>
    </div>
  );
}
