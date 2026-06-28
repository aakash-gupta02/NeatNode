import { buildGenerationPlan } from "../utils/buildGenerationPlan.js";

export async function generateResource({ name, config, context }) {
  const files = ["controller", "service", "route", "validation", "schema"];

  const plan = buildGenerationPlan({
    config,
    context,
    files,
  });

  // for (const file of plan) {
  //   const content = renderTemplate(file.template, context);

  //   await writeFile(file.output, content);

  //   if (file.postGenerate) {
  //     await file.postGenerate(config, context);
  //   }
  // }

  console.log("Generation plan:", plan);
}
