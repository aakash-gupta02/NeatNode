import fs from "fs";
import path from "path";

import { renderTemplate } from "../../core/template/render.js";
import { writeFile } from "../../core/filesystem/writeFile.js";
import type { GenerationContext } from "../../shared/types/GenerationContext.js";
import { getExtension } from "../../shared/utils/getExtension.js";
import { RuntimeNeatNodeConfig } from "../../shared/types/Domain.js";

interface InstallAddonOptions {
  sourcePath: string;
  targetPath: string;
  context: GenerationContext;
  force: boolean;
  language: RuntimeNeatNodeConfig["language"];
}

export async function installAddon({
  sourcePath,
  targetPath,
  context,
  force,
  language,
}: InstallAddonOptions): Promise<string[]> {
  const createdFiles: string[] = [];

  async function processDirectory(
    sourceDir: string,
    destinationDir: string,
  ): Promise<void> {
    const entries = fs.readdirSync(sourceDir, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const sourceFile = path.join(sourceDir, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(
          sourceFile,
          path.join(destinationDir, entry.name),
        );

        continue;
      }

      if (entry.name.endsWith(".hbs")) {
        const extension = getExtension(language);

        const outputName = entry.name.slice(0, -4) + `.${extension}`;

        const outputPath = path.join(destinationDir, outputName);

        const content = renderTemplate(sourceFile, context);

        await writeFile(outputPath, content, {
          overwrite: force,
        });

        createdFiles.push(outputPath);

        continue;
      }

      const outputPath = path.join(destinationDir, entry.name);

      if (fs.existsSync(outputPath) && !force) {
        throw new Error(
          `${path.relative(process.cwd(), outputPath)} already exists.\n\nUse --force to overwrite existing files.`,
        );
      }

      await fs.promises.mkdir(path.dirname(outputPath), {
        recursive: true,
      });

      await fs.promises.copyFile(sourceFile, outputPath);

      createdFiles.push(outputPath);
    }
  }

  await processDirectory(sourcePath, targetPath);

  return createdFiles;
}
