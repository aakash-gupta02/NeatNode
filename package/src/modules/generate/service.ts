import fs from "fs";
import path from "path";

import { writeFile } from "../../core/filesystem/writeFile.js";
import { renderTemplate } from "../../core/template/render.js";
import { buildContext } from "../../shared/builders/buildContext.js";
import { buildGenerationPlan } from "../../shared/builders/buildGenerationPlan.js";
import type {
  FileType,
  NeatNodeConfig,
  RuntimeNeatNodeConfig,
} from "../../shared/types/Domain.js";
import { updateRouteRegistry } from "./updateRouteRegistry.js";
import { validateRouteRegistry } from "./verifyRouteRegistry.js";
import { StarterTemplateConfig } from "../../shared/types/StarterTemplate.js";

interface GenerateResourceOptions {
  name: string;
  config: RuntimeNeatNodeConfig;

  force: boolean;
}

export async function generateResource({
  name,
  config,
  force,
}: GenerateResourceOptions) {
  if (!config.features.resourceGenerator) {
    throw new Error(
      `The "${config.template}" template does not support resource generation.`,
    );
  }

  const cwd = process.cwd();

  const files: FileType[] = [
    "controller",
    "service",
    "route",
    "validation",
    "model",
  ];

  const context = buildContext(name, config);

  const plan = buildGenerationPlan({
    config,
    context,
    files,
  });

  if (!force) {
    for (const file of plan) {
      if (fs.existsSync(file.output)) {
        throw new Error(
          `${path.basename(file.output)} already exists.\n\nUse --force to overwrite existing files.`,
        );
      }
    }
  }

  validateRouteRegistry({
    targetPath: cwd,
    config,
  });

  const createdFiles: string[] = [];

  for (const file of plan) {
    const content = renderTemplate(file.template, context);

    await writeFile(file.output, content, { overwrite: force });

    createdFiles.push(file.output);
  }

  updateRouteRegistry({
    targetPath: cwd,
    context,
    config,
  });

  console.log();

  for (const file of createdFiles) {
    console.log(`✔ Created ${path.basename(file)}`);
  }

  console.log();
  console.log("✔ Updated route registry");
  console.log();
  console.log(`✨ Resource "${name}" generated successfully.`);

  return plan;
}
