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
}) {
  const { provider, client } = database;

  const content = `export default {
  language: "${language}",
  architecture: "${architecture}",
  database: {
    provider: "${provider}",
    client: "${client}"
  },
  validation: "${validation}",
  srcDir: "${srcDir}",
};
`;

  fs.writeFileSync(
    path.join(targetPath, `neatnode.config.${langKey}`),
    content
  );
}