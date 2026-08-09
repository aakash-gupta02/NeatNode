import { getPackageVersion } from "../../shared/utils/getPackageVersion.js";

export const versionCommands = ["--version", "-v", "-version"];

export const showVersion = () => {
  console.log(`NeatNode v${getPackageVersion()}`);
};
