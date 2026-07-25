import { generateResource } from "./service.js";
import { loadConfig } from "../../core/config/loadConfig.js";
import type { GeneratorType } from "../../shared/types/Domain.js";

interface GenerateOptions {
  type: GeneratorType;
  name: string;
  force: boolean;
}

export async function generate({ type, name, force }: GenerateOptions) {
  if (!type) {
    throw new Error("Missing generator type.");
  }

  if (!name) {
    throw new Error("Missing resource name.");
  }
  const config = await loadConfig();

  switch (type) {
    case "resource":
      return generateResource({ name, config, force });

    default:
      throw new Error(`Unknown generator: "${type}"`);
  }
}
