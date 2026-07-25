import path from "path";

import type { NeatNodeConfig } from "../types/Domain.js";
import { getExtension } from "./getExtension.js";

export function getRouteRegistryPath(
  targetPath: string,
  config: NeatNodeConfig,
): string {
  return path.join(
    targetPath,
    config.srcDir,
    "routes",
    `index.route.${getExtension(config.language)}`,
  );
}
