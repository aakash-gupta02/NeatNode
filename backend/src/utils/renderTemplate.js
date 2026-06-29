import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMPLATE_ROOT = path.join(__dirname, "../templates");

export function renderTemplate(templatePath, context) {
  const fullPath = path.join(TEMPLATE_ROOT, templatePath);

  let content = fs.readFileSync(fullPath, "utf8");

  for (const [key, value] of Object.entries(context)) {
    content = content.replaceAll(`{{${key}}}`, value);
  }

  return content;
}
