import fs from "fs";
import path from "path";

export async function generateNeatNodeConfig({
  targetPath,
  language,
  architecture,
  validation,
  langKey,
  database,
  srcDir,
  tempConfig,
}) {
  const { provider, client } = database;

  const content = `export default {
  template: "${tempConfig.template}",

  language: "${language}",
  architecture: "${architecture}",

  database: {
    provider: "${provider}",
    client: "${client}"
  },
  features: {
    resourceGenerator: ${tempConfig.features.resourceGenerator},
  },
  
  validation: "${validation}",
  srcDir: "${srcDir}",
};
`;

  fs.writeFileSync(
    path.join(targetPath, `neatnode.config.${langKey}`),
    content,
  );
}
