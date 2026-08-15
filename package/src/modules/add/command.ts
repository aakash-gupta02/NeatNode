import { loadConfig } from "../../core/config/loadConfig.js";
import type { AddonType } from "../../shared/types/Addon.js";

interface AddonOptions {
  type: AddonType;
  force: boolean;
}

export async function add({ type, force }: AddonOptions) {
  if (!type) {
    throw new Error("Missing addon type.");
  }

  const config = await loadConfig();

  switch (type) {
    case "auth":
    // return addAuth({ config, force });

    default:
      throw new Error(`Unknown addon: "${type}"`);
  }
}
