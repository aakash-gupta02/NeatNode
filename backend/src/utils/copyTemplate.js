import fs from "fs";
import path from "path";

export async function copyTemplate(srcDir, destDir) {
  
  const ignoreList = ["node_modules", ".git", ".env"];

  // make sure destination exists
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // read all files/folders in template
  const items = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const item of items) {
    // skip ignored ones
    if (ignoreList.includes(item.name)) continue;

    const srcPath = path.join(srcDir, item.name);
    const destPath = path.join(destDir, item.name);

    if (item.isDirectory()) {
      // recurse for folders
      await copyTemplate(srcPath, destPath);
    } else {
      // copy individual files
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
