import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import type { GenerationContext } from "../../shared/types/GenerationContext.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_ROOT: string = path.join(__dirname, "../../templates");

export function renderTemplate(
  templatePath: string,
  context: GenerationContext,
): string {
  const fullPath = path.join(TEMPLATE_ROOT, templatePath);

  let content = fs.readFileSync(fullPath, "utf8");

  for (const [key, value] of Object.entries(context) as [string, string][]) {
    content = content.replaceAll(`{{${key}}}`, value);
  }

  return content;
}
