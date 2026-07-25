import fs from "fs";
import path from "path";

interface WriteFileOptions {
  overwrite?: boolean;
}

export async function writeFile(
  filePath: string,
  content: string,
  options: WriteFileOptions = {},
): Promise<void> {
  const { overwrite = false } = options;

  if (fs.existsSync(filePath) && !overwrite) {
    throw new Error(`File already exists: ${path.basename(filePath)}`);
  }

  await fs.promises.mkdir(path.dirname(filePath), {
    recursive: true,
  });

  await fs.promises.writeFile(filePath, content);
}
