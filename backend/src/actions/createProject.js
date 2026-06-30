import fs from "fs";
import path from "path";
import os from "os";
import { copyTemplate } from "../utils/copyTemplate.js";
import {
  cleanupTemplateMarkers,
  removeCrud,
  removeCrudModule,
  removeCrudReferences,
} from "./removeCRUD.js";
import { downloadTemplate, getPackageVersion } from "../utils/downloadRepoTemplateByVersionTags.js";
import { addEnv } from "./addEnv.js";
import { generateNeatNodeConfig } from "../templates/config.js";
import { updatePackageJson } from "../utils/updatePackageJson.js";

export async function createProject({
  projectName,
  repoPath,
  includeCrud,
  crudName,
  langKey,
  isModular,
}) {
  // Project configuration based on user choices
  const projectConfig = {
    language: langKey === "ts" ? "typescript" : "javascript",
    architecture: isModular ? "modular" : "mvc",
    database: {
      provider: "mongodb",
      client: "mongoose",
    },
    validation: langKey === "ts" ? "zod" : "joi",
    srcDir: "src",
    langKey,
  };

  const neatnodeVersion = getPackageVersion();

  try {
    const targetPath =
      projectName === "."
        ? process.cwd()
        : path.join(process.cwd(), projectName);

    // Check if the target directory already exists
    if (fs.existsSync(targetPath) && projectName !== ".") {
      console.error(`❌ Folder "${projectName}" already exists.`);
      process.exit(1);
    }

    // Create the project folder if the project name is not "."
    if (projectName !== ".") {
      console.log("Creating project folder...");
      fs.mkdirSync(targetPath);
    }

    // Download the template from the specified repository path
    console.log("Downloading template...");
    const localTemplatePath = await downloadTemplate(repoPath);

    // Copy the template files to the target directory and replace placeholders
    await copyTemplate(localTemplatePath, targetPath, {
      "project-name":
        projectName === "." ? path.basename(process.cwd()) : projectName,
      author: os.userInfo().username || "author",
    });

    await updatePackageJson({
      targetPath,
      neatnodeVersion,
    });

    // Generate the Neatnode configuration file based on the user's choices
    await generateNeatNodeConfig({
      targetPath,
      ...projectConfig,
    });

    // Add environment variables to the project
    await addEnv({ targetPath });

    // Handle CRUD removal if the user chose not to include it
    if (!includeCrud && crudName) {
      console.log("🗑 Removing CRUD files...");

      if (isModular) {
        removeCrudModule(targetPath, crudName);
      }

      removeCrud(targetPath, crudName, langKey);

      removeCrudReferences(
        path.join(targetPath, "src", "routes", `index.route.${langKey}`),
      );
    }

    // Cleanup template markers
    cleanupTemplateMarkers(
      path.join(targetPath, "src", "routes", `index.route.${langKey}`),
    );
  } catch (err) {
    console.error("❌ Failed to create project:", err);
    process.exit(1);
  }
}
