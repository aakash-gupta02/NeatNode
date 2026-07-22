import fs from "fs";
import path from "path";

export function updatePackageJson({
  targetPath,
  neatnodeVersion,
}) {
  const packageJsonPath = path.join(targetPath, "package.json");

  const packageJson = JSON.parse(
    fs.readFileSync(packageJsonPath, "utf8"),
  );

  packageJson.devDependencies = {
    ...packageJson.devDependencies,
    neatnode: `^${neatnodeVersion}`,
  };

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + "\n",
    "utf8",
  );
}