import { buildContext } from "../utils/buildContext.js";
import { buildGenerationPlan } from "../utils/buildGenerationPlan.js";
import { renderTemplate } from "../utils/renderTemplate.js";
import { writeFile } from "../utils/writeFile.js";
import { updateRouteRegistry } from "./updateRouteRegistry.js";
import path from "path";

export async function generateResource({ name, config }) {
  const files = ["controller", "service", "route", "validation", "model"];

  const context = buildContext(name, config);

  const plan = buildGenerationPlan({
    config,
    context,
    files,
  });

  const createdFiles = [];

  for (const file of plan) {
    const content = renderTemplate(file.template, context);

    await writeFile(file.output, content);

    createdFiles.push(file.output);
  }

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
