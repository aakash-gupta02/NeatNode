import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";
import { copyTemplate } from "../utils/copyTemplate.js";
import { removeCrud, removeCrudModule, removeCrudReferences } from "./removeCRUD.js";
import { downloadTemplate } from "../utils/downloadRepoTemplateByVersionTags.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject({ projectName, repoPath, includeCrud, crudName, langKey, isModular }) {
  try {
    const targetPath = projectName === "."
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
      "project-name": projectName === "." ? path.basename(process.cwd()) : projectName,
      "author": os.userInfo().username || "author",
    });

    if (!includeCrud && crudName) {
      console.log("🗑 Removing CRUD files...");

      if (isModular) {
        removeCrudModule(targetPath, crudName);
        removeCrudReferences(path.join(targetPath, "src", `routes/index.route.${langKey}`));

      }

      removeCrud(targetPath, crudName, langKey);
      removeCrudReferences(path.join(targetPath, "src", `app.${langKey}`));
    }

    console.log(`\n✅ Project "${projectName}" created successfully!\n`);

  } catch (err) {
    console.error("❌ Failed to create project:", err);
    process.exit(1);
  }
}


