import fs from "fs";
import path from "path";

interface UpdatePackageJsonOptions {
  targetPath: string;
  neatnodeVersion: string;
}

interface PackageJson {
  devDependencies?: Record<string, string>;
}

export function updatePackageJson({
  targetPath,
  neatnodeVersion,
}: UpdatePackageJsonOptions): void {
  const packageJsonPath = path.join(targetPath, "package.json");

  const packageJson: PackageJson = JSON.parse(
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