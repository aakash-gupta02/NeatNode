import fs from "fs";
import path from "path";

export async function copyTemplate(srcDir, destDir, replacements = {}) {
  const ignoreList = ["node_modules", ".git", ".env"];

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const items = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const item of items) {
    if (ignoreList.includes(item.name)) continue;

    const srcPath = path.join(srcDir, item.name);
    const destPath = path.join(destDir, item.name);

    if (item.isDirectory()) {
      // recursively copy folders
      await copyTemplate(srcPath, destPath, replacements);
    } else {
      // for certain files, replace placeholders
      if (["package.json"].includes(item.name)) {
        let content = fs.readFileSync(srcPath, "utf-8");

        // replace all {{key}} with provided replacements
        for (const [key, value] of Object.entries(replacements)) {
          const regex = new RegExp(`project-name`, "g");
          content = content.replace(regex, value);
        }

        fs.writeFileSync(destPath, content, "utf-8");
      } else {
        // just copy normal files
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}
