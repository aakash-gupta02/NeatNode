import fs from "fs";

import { getAddonPath } from "../../shared/utils/getAddonPath.js";
import type { RuntimeNeatNodeConfig } from "../../shared/types/Domain.js";
import type { AddonType } from "../../shared/types/Addon.js";

import { ADDON_DEFINITIONS } from "./registry/addons.js";
import { installAddon } from "./installAddon.js";
import { buildContext } from "../../shared/builders/buildContext.js";
import { updateRouteRegistry } from "../generate/updateRouteRegistry.js";
import { validateRouteRegistry } from "../generate/verifyRouteRegistry.js";

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

  const cwd = process.cwd();
  const context = buildContext(addon, config);

  // Validate route registry before modifying the project
  if (definition.routeRegistry) {
    validateRouteRegistry({
      targetPath: cwd,
      config,
    });
  }

  const createdFiles = await installAddon({
    sourcePath: addonPath,
    targetPath: cwd,
    context,
    force,
    language: config.language,
  });

  // Update route registry after successful installation
  if (definition.routeRegistry) {
    updateRouteRegistry({
      targetPath: cwd,
      context,
      config,
    });
  }

  console.log();

  for (const file of createdFiles) {
    console.log(`✔ Created ${file}`);
  }

  console.log();

  if (definition.routeRegistry) {
    console.log("✔ Updated route registry");
  }

  console.log();
  console.log(`✨ Addon "${addon}" added successfully.`);
}
