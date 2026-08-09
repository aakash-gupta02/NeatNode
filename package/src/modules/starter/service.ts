import fs from "fs";
import os from "os";
import path from "path";

import { copyTemplate } from "../../core/filesystem/copyTemplate.js";
import { updatePackageJson } from "../../core/filesystem/packageJson.js";
import type { NeatNodeConfig } from "../../shared/types/Domain.js";
import type { CreateProjectOptions } from "./types/CreateProjectOptions.js";
import {
  cleanupTemplateMarkers,
  removeCrud,
  removeCrudModule,
  removeCrudReferences,
} from "./cleanup.js";
import { addEnv } from "./env.js";
import { downloadTemplate } from "./githubDownloader.js";
import { generateNeatNodeConfig } from "./registry/neatnodeConfig.js";
import { getPackageVersion } from "../../shared/utils/getPackageVersion.js";

export async function createProject({
  projectName,
  repoPath,
  includeCrud,
  crudName,
  langKey,
  isModular,
  tempConfig,
}: CreateProjectOptions): Promise<void> {
  const cwd = process.cwd();

  const targetPath = projectName === "." ? cwd : path.join(cwd, projectName);

  const resolvedProjectName =
    projectName === "." ? path.basename(cwd) : projectName;

  const routesIndexPath = path.join(
    targetPath,
    "src",
    "routes",
    `index.route.${langKey}`,
  );

  const config: NeatNodeConfig = {
    language: langKey === "ts" ? "typescript" : "javascript",
    architecture: isModular ? "modular" : "mvc",
    database: {
      provider: "mongodb",
      client: "mongoose",
    },
    validation: langKey === "ts" ? "zod" : "joi",
    srcDir: "src",
  };

  const neatnodeVersion = getPackageVersion();

  try {
    if (projectName !== "." && fs.existsSync(targetPath)) {
      console.error(`❌ Folder "${projectName}" already exists.`);
      process.exit(1);
    }

    if (projectName !== ".") {
      console.log("Creating project folder...");
      fs.mkdirSync(targetPath);
    }

    console.log("Downloading template...");
    const localTemplatePath = await downloadTemplate(repoPath);

    await copyTemplate({
      srcDir: localTemplatePath,
      destDir: targetPath,
      replacements: {
        "project-name": resolvedProjectName,
        author: os.userInfo().username || "author",
      },
    });

    updatePackageJson({
      targetPath,
      neatnodeVersion,
    });

    await generateNeatNodeConfig({
      targetPath,
      langKey,
      config,
      tempConfig,
    });

    addEnv(targetPath);

    if (!includeCrud && crudName) {
      console.log("🗑 Removing CRUD files...");

      if (isModular) {
        removeCrudModule(targetPath, crudName);
      }

      removeCrud(targetPath, crudName, langKey);
      removeCrudReferences(routesIndexPath);
    }

    cleanupTemplateMarkers(routesIndexPath);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);

    console.error("❌ Failed to create project:", message);
    process.exit(1);
  }
}
