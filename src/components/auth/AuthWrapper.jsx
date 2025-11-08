import React from "react";

export default function AuthWrapper({ title, children }) {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center">
      <div className="bg-gradient-to-b from-black/90 to-blue-950/70 p-8 rounded-2xl w-96 border border-blue-400/30 shadow-[0_0_40px_rgba(59,130,246,0.6)]">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 text-transparent bg-clip-text">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
