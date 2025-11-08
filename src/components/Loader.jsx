export default function Loader() {
  const placeholders = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full p-4">
      {placeholders.map((_, i) => (
        <div
          key={i}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/40 via-black/70 to-red-900/40 border border-blue-500/30 shadow-[0_0_25px_5px_rgba(59,130,246,0.3)] animate-pulse-glow"
        >
          <div className="w-full h-52 sm:h-48 md:h-52 lg:h-56 bg-gradient-to-r from-blue-800/30 via-black/60 to-red-800/30 animate-shimmer rounded-2xl"></div>
          <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-red-500 via-blue-400 to-red-500 blur-sm"></div>
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 blur-sm"></div>
        </div>
      ))}
    </div>
  );
}
