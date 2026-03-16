"use client";

import Image from "next/image";
import { isValidElement, useEffect, useMemo, useState } from "react";
import ExpressJS from "../icons/ExpressJS";
import MongoDB from "../icons/MongoDB";
import NeatNodeLogo from "../icons/NeatNodeLogo";
import NodeJS from "../icons/NodeJS";
import PostgreSQL from "../icons/PostgreSQL";
import Prisma from "../icons/Prisma";
import Redis from "../icons/Redis";

const ICONS = {
  mongodb: <MongoDB className="w-full h-full" />,
  nodejs: <NodeJS className="w-full h-full" />,
  express: <ExpressJS className="w-full h-full" />,
  neatnode: <NeatNodeLogo className="w-full h-full" />,
  postgresql: <PostgreSQL className="w-full h-full" />,
  redis: <Redis className="w-full h-full" />,
  prisma: <Prisma className="w-full h-full" />,
};

const GRID_CONFIGS = {
  mobile: {
    columns: 6,
    rows: 6,
    icons: [
      { row: 2, col: 1, src: ICONS.mongodb },
      { row: 5, col: 1, src: ICONS.nodejs },
      { row: 5, col: 6, src: ICONS.neatnode },
      { row: 1, col: 2, src: ICONS.neatnode },
      { row: 2, col: 6, src: ICONS.prisma },
      { row: 7, col: 1, src: ICONS.redis },
      { row: 1, col: 5, src: ICONS.postgresql },
      { row: 7, col: 6, src: ICONS.express },
    ],
  },
  tablet: {
    columns: 8,
    rows: 8,
    icons: [
      { row: 2, col: 2, src: ICONS.mongodb },
      { row: 3, col: 1, src: ICONS.nodejs },
      { row: 4, col: 2, src: ICONS.express },
      { row: 5, col: 1, src: ICONS.neatnode },
      { row: 5, col: 8, src: ICONS.neatnode },
      { row: 2, col: 7, src: ICONS.prisma },
      { row: 3, col: 8, src: ICONS.redis },
      { row: 4, col: 7, src: ICONS.postgresql },
    ],
  },
  desktop: {
    columns: 12,
    rows: 10,
    icons: [
      { row: 2, col: 3, src: ICONS.mongodb },
      { row: 3, col: 2, src: ICONS.nodejs },
      { row: 4, col: 3, src: ICONS.express },
      { row: 5, col: 4, src: ICONS.neatnode },
      { row: 1, col: 9, src: ICONS.neatnode },
      { row: 4, col: 10, src: ICONS.postgresql },
      { row: 3, col: 11, src: ICONS.redis },
      { row: 2, col: 10, src: ICONS.prisma },
    ],
  },
};

function getLayoutKey(viewportWidth) {
  if (viewportWidth < 640) {
    return "mobile";
  }

  if (viewportWidth < 1024) {
    return "tablet";
  }

  return "desktop";
}

export default function GridBackground() {
  const [viewportWidth, setViewportWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gridConfig = useMemo(() => {
    const layoutKey = getLayoutKey(viewportWidth);
    return GRID_CONFIGS[layoutKey];
  }, [viewportWidth]);

  const gridCellsCount = gridConfig.columns * gridConfig.rows;

  return (
    <div className="absolute inset-0 -z-10 bg-zinc-950 overflow-hidden">
      {/* Outer container with edge fade */}
      <div className="relative w-full h-full flex justify-center mask-[radial-gradient(ellipse_80%_80%_at_50%_0%,#000_60%,transparent_100%)]">
        {/* Responsive grid - square cells at all sizes */}
        <div
          className="grid w-full h-fit border-t border-l border-white/5"
          style={{
            gridTemplateColumns: `repeat(${gridConfig.columns}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${gridConfig.rows}, minmax(0, 1fr))`,
          }}
        >
          {/* Generate Grid Cells with perfect squares */}
          {Array.from({ length: gridCellsCount }).map((_, i) => (
            <div
              key={i}
              className="border-r border-b border-white/5 aspect-square"
            />
          ))}

          {/* Icons positioned absolutely within grid cells */}
          {gridConfig.icons.map((icon, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white/2 backdrop-blur-sm z-10"
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