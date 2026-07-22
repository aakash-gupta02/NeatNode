import fs from "fs";
import path from "path";

export async function writeFile(filePath, content, options = {}) {
  const { overwrite = false } = options;

  if (fs.existsSync(filePath) && !overwrite) {
    throw new Error(`File already exists: ${path.basename(filePath)}`);
  }

  await fs.promises.mkdir(path.dirname(filePath), {
    recursive: true,
  });

  await fs.promises.writeFile(filePath, content);
}
