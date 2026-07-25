import fs from "fs";

import type { NeatNodeConfig } from "../../shared/types/Domain.js";
import { ROUTE_MARKERS } from "./registry/routeMarkers.js";
import { getRouteRegistryPath } from "../../shared/utils/getRouteRegistryPath.js";

interface ValidateRouteRegistryOptions {
  targetPath: string;
  config: NeatNodeConfig;
}

export function validateRouteRegistry({
  targetPath,
  config,
}: ValidateRouteRegistryOptions): void {

  const routeRegistry = getRouteRegistryPath(targetPath, config);

  const content = fs.readFileSync(routeRegistry, "utf8");

  if (
    !content.includes(ROUTE_MARKERS.imports) ||
    !content.includes(ROUTE_MARKERS.routes)
  ) {
    throw new Error(`
❌ NeatNode route markers were not found.

Expected markers in:

${routeRegistry}
${ROUTE_MARKERS.imports}
${ROUTE_MARKERS.routes}

Please restore them before generating resources.
`);
  }
}
