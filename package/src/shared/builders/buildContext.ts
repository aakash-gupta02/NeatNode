import { NeatNodeConfig } from "../types/Domain.js";
import { GenerationContext } from "../types/GenerationContext.js";

function buildImportPaths(
  architecture: NeatNodeConfig["architecture"],
) {
  if (architecture === "mvc") {
    return {
      // Resource imports
      serviceImport: "../services/",
      controllerImport: "../controllers/",
      validationImport: "../schemas/",
      modelImport: "../models/",

      // Shared imports
      utilsImport: "../utils/",
      middlewareImport: "../middleware/",
      configImport: "../config/",
    };
  }

  return {
    // Resource imports
    serviceImport: "./",
    controllerImport: "./",
    validationImport: "./",
    modelImport: "./",

    // Shared imports
    utilsImport: "../../shared/utils/",
    middlewareImport: "../../core/middleware/",
    configImport: "../../core/config/",
  };
}

function toPascalCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function toCamelCase(value: string) {
  const pascal = toPascalCase(value);

  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function toKebabCase(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-").replace(/_/g, "-");
}

export function buildContext(name: string, config: NeatNodeConfig): GenerationContext {
  const camelName = toCamelCase(name);
  const pascalName = toPascalCase(name);
  const kebabName = toKebabCase(name);

  return {
    name,
    rawName: name,

    camelName,
    pascalName,
    kebabName,

    pluralName: `${kebabName}s`,
    camelPluralName: `${camelName}s`,
    pascalPluralName: `${pascalName}s`,
    ...buildImportPaths(config.architecture),
  };
}
