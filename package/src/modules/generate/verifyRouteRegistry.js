import fs from "fs";
import path from "path";

export function validateRouteRegistry({ targetPath, config }) {
  const extension = config.language === "typescript" ? "ts" : "js";

  const routeRegistry = path.join(
    targetPath,
    config.srcDir,
    "routes",
    `index.route.${extension}`,
  );

  let content = fs.readFileSync(routeRegistry, "utf8");

  // Check for markers
  const IMPORT_MARKER = "/* <NEATNODE_IMPORTS> */";
  const ROUTE_MARKER = "/* <NEATNODE_ROUTES> */";

  // If the markers are not found, throw an error and exit the process
  if (!content.includes(IMPORT_MARKER) || !content.includes(ROUTE_MARKER)) {
    console.error(`
❌ NeatNode route markers were not found.

Expected markers in:

${routeRegistry}
${IMPORT_MARKER}
${ROUTE_MARKER}

Please restore them before generating resources.
`);

    process.exit(1);
  }
}
