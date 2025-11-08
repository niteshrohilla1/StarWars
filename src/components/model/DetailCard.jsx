import React from "react";

export default function DetailCard({ label, value }) {
  return (
    <div className="bg-black/50 border border-blue-400/30 rounded-xl p-5 text-base sm:text-lg shadow-inner hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition">
      <p className="text-blue-300 text-sm mb-1 uppercase tracking-wider">{label}</p>
      <p className="font-semibold text-blue-100">{value}</p>
    </div>
  );
}
