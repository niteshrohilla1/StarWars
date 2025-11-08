import React from "react";
import CharacterList from "../CharacterList";

export default function MainLayout() {
  return (
    <main className="flex-grow p-6">
      <CharacterList />
    </main>
  );
}
