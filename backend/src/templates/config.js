import fs from "fs";
import path from "path";

export async function generateNeatNodeConfig({
  targetPath,
  language,
  architecture,
  validation,
  langKey,
  database,
  dbClient,
}) {
  const content = `export default {
  language: "${language}",
  architecture: "${architecture}",
  database: {
    provider: "${database}", 
    client: "${dbClient}"
  },
  validation: "${validation}",
  srcDir: "src",
};
`;

  fs.writeFileSync(
    path.join(targetPath, `neatnode.config.${langKey}`),
    content,
  );
}
