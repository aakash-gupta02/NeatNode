import { loadConfig } from "../../core/config/loadConfig.js";
import type { AddonType } from "../../shared/types/Addon.js";
import { addAddon } from "./service.js";

interface AddonOptions {
  type: AddonType;
  force: boolean;
}

export async function add({ type, force }: AddonOptions) {
  if (!type) {
    throw new Error("Missing addon type.");
  }

  const config = await loadConfig();

  return addAddon({
    addon: type,
    config,
    force,
  });
}
