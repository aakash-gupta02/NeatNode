import fs from "fs";
import path from "path";

const addonsRoot = path.resolve("addons");

function convertDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const currentPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      convertDirectory(currentPath);
      continue;
    }

    if (entry.name.endsWith(".js") || entry.name.endsWith(".ts")) {
      const newPath = `${currentPath.slice(0, currentPath.lastIndexOf("."))}.hbs`;

      fs.renameSync(currentPath, newPath);

      console.log(
        `✔ ${path.relative(addonsRoot, currentPath)} → ${path.relative(
          addonsRoot,
          newPath,
        )}`,
      );
    }
  }
}

if (!fs.existsSync(addonsRoot)) {
  console.error("❌ addons directory not found.");
  process.exit(1);
}

convertDirectory(addonsRoot);

console.log("\n✨ Converted addon templates successfully.");