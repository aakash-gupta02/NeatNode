import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

import type { RuntimeNeatNodeConfig } from "../../shared/types/Domain.js";

export async function loadConfig(): Promise<RuntimeNeatNodeConfig> {
  const cwd = process.cwd();

  const possibleConfigs = ["neatnode.config.js", "neatnode.config.ts"];

  let configPath: string | null = null;

  for (const file of possibleConfigs) {
    const fullPath = path.join(cwd, file);

    if (fs.existsSync(fullPath)) {
      configPath = fullPath;
      break;
    }
  }

  if (!configPath) {
    throw new Error("No neatnode.config.js or neatnode.config.ts found.");
  }

  const { default: config } = await import(pathToFileURL(configPath).href);

  return config as RuntimeNeatNodeConfig;
}
