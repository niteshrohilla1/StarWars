import React from "react";

export default function CharacterImage({ person }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg transition-all duration-300"
      style={{
        backgroundColor: `${person.accentColor}20`,
        boxShadow: `0 0 15px ${person.accentColor}80`,
      }}
    >
      {person.imageUrl ? (
        <img
          src={person.imageUrl}
          alt={person.name}
          className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 object-cover rounded-lg transition-all duration-300"
          style={{
            border: `2px solid ${person.accentColor}`,
            boxShadow: `0 0 20px ${person.accentColor}80`,
          }}
        />
      ) : (
        <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 flex items-center justify-center text-gray-400">
          Loading...
        </div>
      )}
      <div
        className="absolute bottom-0 left-0 w-full h-2"
        style={{
          backgroundColor: person.accentColor,
          boxShadow: `0 0 20px ${person.accentColor}`,
        }}
      ></div>
    </div>
  );
}
