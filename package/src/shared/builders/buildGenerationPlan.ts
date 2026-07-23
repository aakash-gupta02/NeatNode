import {
  FILE_DEFINITIONS,
  type FileDefinition,
} from "../../modules/generate/registry/fileDefinitions.js";
import { GenerationContext } from "../types/GenerationContext.js";
import { FileType, NeatNodeConfig } from "../types/Domain.js";

export function buildGenerationPlan({
  config,
  context,
  files,
}: {
  config: NeatNodeConfig;
  context: GenerationContext;
  files: FileType[];
}) {
  const extension = config.language === "typescript" ? "ts" : "js";

  const fileDefinitions = files
    .map((type) => FILE_DEFINITIONS.find((file) => file.type === type))
    .filter((file): file is FileDefinition => file !== undefined)
    .filter((file) => {
      if (!file.database) return true;

      return file.database === config.database.client;
    })
    .map((file) => ({
      type: file.type,
      template: file.database
        ? `${config.language}/${config.database.client}/${file.template}`
        : `${config.language}/${file.template}`,
      output: file.output(config, context.camelName, extension),
    }));

  return fileDefinitions;
}
