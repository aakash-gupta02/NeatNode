import fs from "fs";
import path from "path";

import { getExtension } from "../../shared/utils/getExtension.js";
import type { GenerationContext } from "../../shared/types/GenerationContext.js";
import type { NeatNodeConfig } from "../../shared/types/Domain.js";
import { getRouteRegistryPath } from "../../shared/utils/getRouteRegistryPath.js";
import { ROUTE_MARKERS } from "./registry/routeMarkers.js";

interface UpdateRouteRegistryOptions {
  targetPath: string;
  context: GenerationContext;
  config: NeatNodeConfig;
}

export function updateRouteRegistry({
  targetPath,
  context,
  config,
}: UpdateRouteRegistryOptions): void {
  const extension = getExtension(config.language);

  const routeRegistry = getRouteRegistryPath(targetPath, config);

  let content = fs.readFileSync(routeRegistry, "utf8");

  const importStatement =
    config.architecture === "modular"
      ? `import ${context.camelName}Route from "../modules/${context.rawName}/${context.rawName}.route.${extension}";`
      : `import ${context.camelName}Route from "./${context.rawName}.route.${extension}";`;

  const routeStatement = `router.use("/${context.pluralName}", ${context.camelName}Route);`;

  if (!content.includes(importStatement)) {
    content = content.replace(
      ROUTE_MARKERS.imports,
      `${importStatement}\n${ROUTE_MARKERS.imports}`,
    );
  }

  if (!content.includes(routeStatement)) {
    content = content.replace(
      ROUTE_MARKERS.routes,
      `${routeStatement}\n${ROUTE_MARKERS.routes}`,
    );
  }

  fs.writeFileSync(routeRegistry, content, "utf8");
}
