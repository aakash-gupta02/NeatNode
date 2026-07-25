import fs from "fs";
import path from "path";
import type { LangKey } from "../../shared/types/Domain.js";

function getCrudPaths(name: string, langKey: LangKey): string[] {
  return [
    `src/models/${name}.model.${langKey}`,
    `src/controllers/${name}.controller.${langKey}`,
    `src/routes/${name}.route.${langKey}`,
    `src/services/${name}.service.${langKey}`,
    `src/validations/${name}.validation.${langKey}`,
    `src/middlewares/auth.middleware.${langKey}`,
    `src/schemas/${name}.schema.${langKey}`,
  ];
}

export function removeCrud(
  targetPath: string,
  name: string,
  langKey: LangKey,
): void {
  try {
    for (const relPath of getCrudPaths(name, langKey)) {
      const absPath = path.join(targetPath, relPath);

      if (fs.existsSync(absPath)) {
        fs.rmSync(absPath, { force: true });
        console.log(`✔ Removed: ${relPath}`);
      }
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("❌ Error while removing CRUD files:", message);
  }
}

export function cleanupTemplateMarkers(filePath: string): boolean {
  if (!fs.existsSync(filePath)) {
    return false;
  }

  let content = fs.readFileSync(filePath, "utf8");

  content = content
    .replace(/^\s*\/\/ ROUTE_IMPORTS_START\s*$/gm, "")
    .replace(/^\s*\/\/ ROUTE_IMPORTS_END\s*$/gm, "")
    .replace(/^\s*\/\/ ROUTE_USES_START\s*$/gm, "")
    .replace(/^\s*\/\/ ROUTE_USES_END\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n");

  fs.writeFileSync(filePath, content, "utf8");

  return true;
}

export function removeCrudReferences(appJsPath: string): boolean {
  if (!fs.existsSync(appJsPath)) {
    return false;
  }

  let content = fs.readFileSync(appJsPath, "utf8");

  content = content.replace(
    /\s*\/\/ ROUTE_IMPORTS_START[\s\S]*?\/\/ ROUTE_IMPORTS_END\s*/g,
    "\n",
  );

  content = content.replace(
    /\s*\/\/ ROUTE_USES_START[\s\S]*?\/\/ ROUTE_USES_END\s*/g,
    "\n",
  );

  fs.writeFileSync(appJsPath, content, "utf8");

  return true;
}

export function removeCrudModule(targetPath: string, name: string): void {
  try {
    const modulePath = path.join(targetPath, `src/modules/${name}`);

    if (fs.existsSync(modulePath)) {
      fs.rmSync(modulePath, {
        recursive: true,
        force: true,
      });

      console.log(`✔ Removed module: ${name}`);
    } else {
      console.log(`Skipped module (not found): ${name}`);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("❌ Error while removing CRUD module:", message);
  }
}
