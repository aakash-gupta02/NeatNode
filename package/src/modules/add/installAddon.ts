import fs from "fs";
import path from "path";

import { renderTemplate } from "../../core/template/render.js";
import { writeFile } from "../../core/filesystem/writeFile.js";
import type { GenerationContext } from "../../shared/types/GenerationContext.js";
import { getExtension } from "../../shared/utils/getExtension.js";
import type { RuntimeNeatNodeConfig } from "../../shared/types/Domain.js";

interface InstallAddonOptions {
  sourcePath: string;
  targetPath: string;
  context: GenerationContext;
  force: boolean;
  language: RuntimeNeatNodeConfig["language"];
}
interface AddonFile {
  source: string;
  output: string;
}

export async function installAddon({
  sourcePath,
  targetPath,
  context,
  force,
  language,
}: InstallAddonOptions): Promise<string[]> {
  const files: AddonFile[] = [];
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

        files.push({
          source: sourceFile,
          output: path.join(destinationDir, outputName),
        });

        continue;
      }

      files.push({
        source: sourceFile,
        output: path.join(destinationDir, entry.name),
      });
    }
  }

  // Phase 1 — Build installation plan
  await processDirectory(sourcePath, targetPath);

  // Phase 2 — Validate entire plan
  if (!force) {
    for (const file of files) {
      if (fs.existsSync(file.output)) {
        throw new Error(
          `File already exists: ${path.relative(process.cwd(), file.output)}`,
        );
      }
    }
  }

  // Phase 3 — Install everything
  for (const file of files) {
    if (file.source.endsWith(".hbs")) {
      const content = renderTemplate(file.source, context);

      await writeFile(file.output, content, {
        overwrite: force,
      });
    } else {
      await fs.promises.mkdir(path.dirname(file.output), {
        recursive: true,
      });

      await fs.promises.copyFile(file.source, file.output);
    }

    createdFiles.push(file.output);
  }

  return createdFiles;
}
