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

  const moduleImport = `import ${context.camelName}Route from "../modules/${context.rawName}/${context.rawName}.route.${extension}";`;
  const mvcImport = `import ${context.camelName}Route from "./${context.rawName}.route.${extension}";`;

  const importStatement =
    config.architecture === "modular" ? moduleImport : mvcImport;

  const routeStatement = `router.use("/${context.pluralName}", ${context.camelName}Route);`;

  // Prevent duplicate imports
  if (!content.includes(importStatement)) {
    content = content.replace(
      "/* <NEATNODE_IMPORTS> */",
      `${importStatement}\n/* <NEATNODE_IMPORTS> */`,
    );
  }

  // Prevent duplicate routes
  if (!content.includes(routeStatement)) {
    content = content.replace(
      "/* <NEATNODE_ROUTES> */",
      `${routeStatement}\n/* <NEATNODE_ROUTES> */`,
    );
  }

  fs.writeFileSync(routeRegistry, content, "utf8");
}
