import { buildContext } from "../utils/buildContext.js";
import { buildGenerationPlan } from "../utils/buildGenerationPlan.js";
import { renderTemplate } from "../utils/renderTemplate.js";
import { writeFile } from "../utils/writeFile.js";

export async function generateResource({ name, config }) {
  const files = ["controller", "service", "route", "validation", "model"];

  const context = buildContext(name);

  const plan = buildGenerationPlan({
    config,
    context,
    files,
  });

  for (const file of plan) {
    const content = renderTemplate(file.template, context);

    await writeFile(file.output, content);

    if (file.postGenerate) {
      await file.postGenerate(config, context);
    }
  }

  return plan;
}
