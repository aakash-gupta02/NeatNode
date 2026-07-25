import fs from "fs";
import path from "path";

interface CopyTemplateOptions {
  srcDir: string;
  destDir: string;
  replacements?: Record<string, string | number | boolean>;
}

export async function copyTemplate({
  srcDir,
  destDir,
  replacements = {},
}: CopyTemplateOptions): Promise<void> {

const IGNORE_LIST: readonly string[] = [
  "node_modules",
  ".git",
  ".env",
  "package-lock.json",
  ".npmignore",
  "logs",
];

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const items = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const item of items) {
    if (IGNORE_LIST.includes(item.name)) continue;

    const srcPath = path.join(srcDir, item.name);
    const destPath = path.join(destDir, item.name);

    if (item.isDirectory()) {
      // recursively copy folders
      await copyTemplate({ srcDir: srcPath, destDir: destPath, replacements });
    } else {
      // for certain files, replace placeholders
      if (["package.json"].includes(item.name)) {
        let content = fs.readFileSync(srcPath, "utf-8");

        // Replace all configured {{key}} placeholders with their values.
        for (const [key, value] of Object.entries(replacements)) {
          const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const regex = new RegExp(`\\{\\{\\s*${escapedKey}\\s*\\}\\}`, "g");
          content = content.replace(regex, String(value));
        }

        fs.writeFileSync(destPath, content, "utf-8");
      } else {
        // just copy normal files
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}
