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
import { downloadTemplate } from "../utils/downloadRepoTemplateByVersionTags.js";
import { addEnv } from "./addEnv.js";
import { generateNeatNodeConfig } from "../templates/config.js";

export async function createProject({
  projectName,
  repoPath,
  includeCrud,
  crudName,
  langKey,
  isModular,
}) {

  const projectConfig = {
    language: langKey === "ts" ? "typescript" : "javascript",
    architecture: isModular ? "modular" : "mvc",
    database: "mongodb",
    dbClient: "mongoose",
    validation: langKey === "ts" ? "zod" : "joi",
    langKey,
  };

  try {
    const targetPath =
      projectName === "."
        ? process.cwd()
        : path.join(process.cwd(), projectName);

    if (fs.existsSync(targetPath) && projectName !== ".") {
      console.error(`❌ Folder "${projectName}" already exists.`);
      process.exit(1);
    }

    if (projectName !== ".") {
      console.log("Creating project folder...");
      fs.mkdirSync(targetPath);
    }

    console.log("Downloading template...");
    const localTemplatePath = await downloadTemplate(repoPath);

    await copyTemplate(localTemplatePath, targetPath, {
      "project-name":
        projectName === "." ? path.basename(process.cwd()) : projectName,
      author: os.userInfo().username || "author",
    });

    await generateNeatNodeConfig({
      targetPath,
      ...projectConfig,
    });

    await addEnv({ targetPath });

    if (!includeCrud && crudName) {
      console.log("🗑 Removing CRUD files...");

      if (isModular) {
        removeCrudModule(targetPath, crudName);

        removeCrudReferences(
          path.join(targetPath, "src", `routes/index.route.${langKey}`),
        );
      }

      removeCrud(targetPath, crudName, langKey);

      removeCrudReferences(path.join(targetPath, "src", `app.${langKey}`));
    }

    cleanupTemplateMarkers(path.join(targetPath, "src", `app.${langKey}`));

    if (isModular) {
      cleanupTemplateMarkers(
        path.join(targetPath, "src", `routes/index.route.${langKey}`),
      );
    }
  } catch (err) {
    console.error("❌ Failed to create project:", err);
    process.exit(1);
  }
}
