import fs from "fs";
import path from "path";

export function updateRouteRegistry({ targetPath, context, config }) {
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

  // Generate import and route statements based on architecture
  const moduleImport = `import ${context.camelName}Route from "../modules/${context.rawName}/${context.rawName}.route.${extension}";`;
  const mvcImport = `import ${context.camelName}Route from "./${context.rawName}.route.${extension}";`;

  const importStatement =
    config.architecture === "modular" ? moduleImport : mvcImport;

  const routeStatement = `router.use("/${context.pluralName}", ${context.camelName}Route);`;

  // Prevent duplicate imports
  if (!content.includes(importStatement)) {
    content = content.replace(
      IMPORT_MARKER,
      `${importStatement}\n${IMPORT_MARKER}`,
    );
  }

  // Prevent duplicate routes
  if (!content.includes(routeStatement)) {
    content = content.replace(
      ROUTE_MARKER,
      `${routeStatement}\n${ROUTE_MARKER}`,
    );
  }

  fs.writeFileSync(routeRegistry, content, "utf8");
}
