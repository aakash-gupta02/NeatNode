import { FILE_DEFINITIONS } from "../config/fileDefinitions.js";

export function buildGenerationPlan({ config, context, files }) {
  const extension = config.language === "typescript" ? "ts" : "js";

  const fileDefinitions = files
    .map((type) => FILE_DEFINITIONS.find((file) => file.type === type))
    .filter(Boolean)
    .filter((file) => {
      if (!file.database) return true;

      return file.database === config.database.client;
    })
    .map((file) => ({
      type: file.type,
      template: `${config.language}/${file.template}`,
      output: file.output(config, context.camelName, extension),
      // postGenerate: file.postGenerate,
    }));

  return fileDefinitions;
}
