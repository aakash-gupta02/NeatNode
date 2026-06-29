import { buildContext } from "../utils/buildContext.js";
import { buildGenerationPlan } from "../utils/buildGenerationPlan.js";
import { renderTemplate } from "../utils/renderTemplate.js";
import { writeFile } from "../utils/writeFile.js";
import { updateRouteRegistry } from "./updateRouteRegistry.js";
import path from "path";
import fs from "fs";
import { validateRouteRegistry } from "./verifyRouteRegistry.js";

export async function generateResource({ name, config, force }) {
  const files = ["controller", "service", "route", "validation", "model"];

  const context = buildContext(name, config);

  const plan = buildGenerationPlan({
    config,
    context,
    files,
  });

  const createdFiles = [];
  
  // Check if any of the files in the plan already exist
  if (!force) {
    for (const file of plan) {
      if (fs.existsSync(file.output)) {
        console.error(`❌ ${path.basename(file.output)} already exists.`);

        console.log("\nUse --force to overwrite existing files.");

        process.exit(1);
      }
    }
  }

  // Validate the route registry before proceeding with file generation
  validateRouteRegistry({
    targetPath: process.cwd(),
    config,
  });

  // Generate files based on the plan
  for (const file of plan) {
    const content = renderTemplate(file.template, context);

    await writeFile(file.output, content, { overwrite: force });

    createdFiles.push(file.output);
  }

  // Update the route registry after generating files
  updateRouteRegistry({
    targetPath: process.cwd(),
    context,
    config,
  });

  console.log();

  for (const file of createdFiles) {
    console.log(`✔ Created ${path.basename(file)}`);
  }

  console.log();
  console.log("✔ Updated routes/index.route.js");
  console.log();
  console.log(`✨ Resource "${name}" generated successfully.`);

  return plan;
}
