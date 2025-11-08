import React from "react";
import CharacterImage from "./CharacterImage";
import CharacterName from "./CharacterName";

export default function CharacterCard({ person, onClick }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      className="cursor-pointer hover:scale-105 transition transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
    >
      <CharacterImage person={person} />
      <CharacterName person={person} />
    </div>
  );
}
