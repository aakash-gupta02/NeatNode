import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

export async function loadConfig() {
  const cwd = process.cwd();

  const possibleConfigs = [
    "neatnode.config.js",
    "neatnode.config.ts",
  ];

  let configPath = null;

  for (const file of possibleConfigs) {
    const fullPath = path.join(cwd, file);

    if (fs.existsSync(fullPath)) {
      configPath = fullPath;
      break;
    }
  }

  if (!configPath) {
    throw new Error(
      "No neatnode.config.js or neatnode.config.ts found."
    );
  }

  const config = await import(pathToFileURL(configPath).href);

  return config.default;
}