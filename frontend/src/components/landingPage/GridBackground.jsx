import Image from "next/image";
import { isValidElement } from "react";
import ExpressJS from "../icons/ExpressJS";
import MongoDB from "../icons/MongoDB";
import NeatNodeLogo from "../icons/NeatNodeLogo";
import NodeJS from "../icons/NodeJS";
import PostgreSQL from "../icons/PostgreSQL";
import Prisma from "../icons/Prisma";
import Redis from "../icons/Redis";

const GRID_COLUMNS = 12;
const GRID_ROWS = 10;

const gridIcons = [
  // left side
  { row: 2, col: 3, src: <MongoDB className="w-full h-full" /> },
  { row: 3, col: 2, src: <NodeJS className="w-full h-full" /> },
  { row: 4, col: 3, src: <ExpressJS className="w-full h-full" /> },

  // Neatnode logo
  { row: 5, col: 4, src: <NeatNodeLogo className="w-full h-full" /> },
  { row: 1, col: 9, src: <NeatNodeLogo className="w-full h-full" /> },

  // right side
  { row: 4, col: 10, src: <PostgreSQL className="w-full h-full" /> },
  { row: 3, col: 11, src: <Redis className="w-full h-full" /> },
  { row: 2, col: 10, src: <Prisma className="w-full h-full" /> },
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
            gridTemplateColumns: `repeat(${GRID_COLUMNS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${GRID_ROWS}, minmax(0, 1fr))`,
          }}
        >
          {/* Generate Grid Cells with perfect squares */}
          {Array.from({ length: GRID_COLUMNS * GRID_ROWS }).map((_, i) => (
            <div
              key={i}
              className="border-r border-b border-white/5 aspect-square"
            />
          ))}

          {/* Icons positioned absolutely within grid cells */}
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
                {isValidElement(icon.src) ? (
                  <div className="opacity-60 group-hover:opacity-100 transition-opacity w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7">
                    {icon.src}
                  </div>
                ) : (
                  <Image
                    src={icon.src}
                    alt="tech icon"
                    width={24}
                    height={24}
                    className="opacity-40 group-hover:opacity-100 transition-opacity grayscale invert w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                  />
                )}
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