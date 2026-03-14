import Image from "next/image";

const gridIcons = [
  // Left side icons (using same pattern as right side but mirrored)
  { row: 2, col: 2, src: "/file.svg" },
  { row: 3, col: 1, src: "/globe.svg" },
  { row: 4, col: 3, src: "/next.svg" },
  { row: 5, col: 2, src: "/vercel.svg" },
  { row: 6, col: 1, src: "/window.svg" },
  { row: 7, col: 3, src: "/logo.svg" },
  // Right side icons (columns 6-8)
  { row: 2, col: 7, src: "/file.svg" },
  { row: 3, col: 8, src: "/globe.svg" },
  { row: 4, col: 6, src: "/vercel.svg" },
  { row: 5, col: 7, src: "/window.svg" },
  { row: 6, col: 8, src: "/next.svg" },
  { row: 7, col: 6, src: "/logo.svg" },
];

export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-zinc-950 overflow-hidden">
      {/* Outer container with edge fade */}
      <div className="relative w-full h-full flex justify-center [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_60%,transparent_100%)]">
        {/* Responsive grid - square cells at all sizes */}
        <div
          className="grid w-full h-fit border-t border-l border-white/5"
          style={{
            // Using 8 columns for perfect symmetry
            gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
            gridTemplateRows: "repeat(10, minmax(0, 1fr))",
          }}
        >
          {/* Generate Grid Cells with perfect squares */}
          {Array.from({ length: 8 * 10 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-b border-white/5 aspect-square"
            />
          ))}

          {/* Icons positioned within grid cells */}
          {gridIcons.map((icon, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white/[0.02] backdrop-blur-sm z-10"
              style={{
                gridColumnStart: icon.col,
                gridRowStart: icon.row,
                gridColumnEnd: "span 1",
                gridRowEnd: "span 1",
              }}
            >
              <div className="relative group p-2 sm:p-3 md:p-4 border border-white/10 rounded-lg bg-zinc-900/50 aspect-square flex items-center justify-center">
                <Image
                  src={icon.src}
                  alt="tech icon"
                  width={24}
                  height={24}
                  className="opacity-40 group-hover:opacity-100 transition-opacity grayscale invert w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-emerald-500/10 blur-[120px] pointer-events-none" />
    </div>
  );
}