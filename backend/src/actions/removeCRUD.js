import fs from "fs";
import path from "path";


export function removeCrud(targetPath, name, langKey) {
  try {
    const crudPaths = [
      `src/models/${name}.model.${langKey}`,
      `src/controllers/${name}.controller.${langKey}`,
      `src/routes/${name}.route.${langKey}`,
      `src/services/${name}.service.${langKey}`,
      `src/validations/${name}.validation.${langKey}`,
      `src/middlewares/auth.middleware.${langKey}`,
      `src/schemas/${name}.schema.${langKey}`
    ];

    crudPaths.forEach(relPath => {
      const absPath = path.join(targetPath, relPath);

      if (fs.existsSync(absPath)) {
        fs.rmSync(absPath, { force: true });
        console.log(`✔ Removed: ${relPath}`);
      } // else {
      //   console.log(`Skipped (not found): ${relPath}`);
      // }
    });
  } catch (err) {
    console.error("❌ Error while removing CRUD files:", err.message);
  }
}


export function removeCrudReferences(appJsPath) {
  let content = fs.readFileSync(appJsPath, "utf8");

  // Remove imports block
  content = content.replace(
    /\/\/ ROUTE_IMPORTS_START[\s\S]*?\/\/ ROUTE_IMPORTS_END/,
    ""
  );

  // Remove route usage block
  content = content.replace(
    /\/\/ ROUTE_USES_START[\s\S]*?\/\/ ROUTE_USES_END/,
    ""
  );

  fs.writeFileSync(appJsPath, content, "utf8");
}
