import React from "react";
import DetailText from "./DetailText";

export default function HomeworldSection({ homeworld }) {
  return (
    <div className="bg-black/50 border border-blue-500/30 rounded-2xl p-6 shadow-inner hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition">
      <h3 className="text-xl font-semibold text-red-400 mb-4 tracking-wide">
        🌍 Homeworld Details
      </h3>
      {homeworld ? (
        <div className="grid grid-cols-2 gap-y-3 text-base sm:text-lg">
          <DetailText label="Name" value={homeworld.name} />
          <DetailText label="Terrain" value={homeworld.terrain} />
          <DetailText label="Climate" value={homeworld.climate} />
          <DetailText label="Population" value={homeworld.population} />
        </div>
      ) : (
        <p className="text-blue-300 italic">Decrypting homeworld data...</p>
      )}
    </div>
  );
}
