import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { log } from "console";

const packageJsonPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../../package.json",
);

const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));

export const getPackageVersion = (): string => {
  return packageJson.version;
};