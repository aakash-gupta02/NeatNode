import fs from "fs";
import path from "path";
import { NeatNodeConfig } from "../../../shared/types/Domain.js";
import { StarterTemplate } from "../../../shared/types/StarterTemplate.js";

interface GenerateNeatNodeConfigOptions {
  targetPath: string;
  langKey: "js" | "ts";
  config: NeatNodeConfig;
  tempConfig: StarterTemplate;
}

export async function generateNeatNodeConfig({
  targetPath,
  langKey,
  config,
  tempConfig,
}: GenerateNeatNodeConfigOptions): Promise<void> {
  const content = `export default {
  template: "${tempConfig.config.template}",

  language: "${config.language}",
  architecture: "${config.architecture}",

  database: {
    provider: "${config.database.provider}",
    client: "${config.database.client}"
  },

  features: {
    resourceGenerator: ${tempConfig.config.features.resourceGenerator},
  },

  validation: "${config.validation}",
  srcDir: "${config.srcDir}",
};
`;

  fs.writeFileSync(
    path.join(targetPath, `neatnode.config.${langKey}`),
    content,
  );
}
