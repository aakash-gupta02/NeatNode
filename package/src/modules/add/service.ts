import fs from "fs";

import { getAddonPath } from "../../shared/utils/getAddonPath.js";
import type {
  NeatNodeConfig,
  RuntimeNeatNodeConfig,
} from "../../shared/types/Domain.js";
import type { AddonType } from "../../shared/types/Addon.js";

import { ADDON_DEFINITIONS } from "./registry/addons.js";
import { installAddon } from "./installAddon.js";
import { buildContext } from "../../shared/builders/buildContext.js";

interface AddAddonOptions {
  addon: AddonType;
  config: RuntimeNeatNodeConfig;
  force: boolean;
}

export async function addAddon({
  addon,
  config,
  force,
}: AddAddonOptions): Promise<void> {

  const definition = ADDON_DEFINITIONS[addon];

  if (!definition) {
    throw new Error(`Unknown addon: "${addon}"`);
  }

  const addonPath = getAddonPath(addon, config, definition.databaseRequired);

  if (!fs.existsSync(addonPath)) {
    throw new Error(
      `Addon "${addon}" is not available for ${config.language} + ${config.database.client}.`,
    );
  }

  const context = buildContext("user", config);

  const createdFiles = await installAddon({
    sourcePath: addonPath,
    targetPath: process.cwd(),
    context,
    force,
  });

  console.log();

  for (const file of createdFiles) {
    console.log(`✔ Created ${file}`);
  }

  console.log();
  console.log(`✨ Addon "${addon}" added successfully.`);
}
