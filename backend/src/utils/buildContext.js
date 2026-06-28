function toPascalCase(value) {
  return value
    .split(/[-_\s]+/)
    .map(
      word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}

function toCamelCase(value) {
  const pascal = toPascalCase(value);

  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function toKebabCase(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/_/g, "-");
}

export function buildContext(name) {
  const camelName = toCamelCase(name);
  const pascalName = toPascalCase(name);
  const kebabName = toKebabCase(name);

  return {
    name,

    camelName,
    pascalName,
    kebabName,

    pluralName: `${kebabName}s`,
    camelPluralName: `${camelName}s`,
    pascalPluralName: `${pascalName}s`,
  };
}