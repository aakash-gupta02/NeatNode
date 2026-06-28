import { generateResource } from "../generators/resource.js";
import { loadConfig } from "../utils/loadConfig.js";

export async function generate({ type, name }) {
  if (!type) {
    throw new Error("Missing generator type.");
  }

  if (!name) {
    throw new Error("Missing resource name.");
  }
  const config = await loadConfig();

  switch (type) {
    case "resource":
      return generateResource({ name, config });

    default:
      throw new Error(`Unknown generator: "${type}"`);
  }
}