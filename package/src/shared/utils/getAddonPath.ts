import path from "path";
import { fileURLToPath } from "url";
import type { AddonType } from "../types/Addon.js";
import type { NeatNodeConfig } from "../types/Domain.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ADDON_ROOT = path.resolve(__dirname, "../../../addons");

export function getAddonPath(
  addon: AddonType,
  config: NeatNodeConfig,
  databaseRequired: boolean,
): string {
  const language =
    config.language === "typescript" ? "typescript" : "javascript";

  const addonPath = databaseRequired
    ? path.join(language, addon, config.database.client)
    : path.join(language, addon);

  return path.join(ADDON_ROOT, addonPath);
}
