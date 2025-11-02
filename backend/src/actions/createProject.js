import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";
import { copyTemplate } from "../utils/copyTemplate.js";
import { removeCrud, removeCrudReferences } from "./removeCRUD.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject({ projectName, templatePath, includeCrud }) {
  try {
    // If user wants to create in current dir (.)
    const targetPath = projectName === "." ? process.cwd() : path.join(process.cwd(), projectName);

    if (fs.existsSync(targetPath) && projectName !== ".") {
      console.error(`❌ Folder "${projectName}" already exists.`);
      process.exit(1);
    }

    if (projectName !== ".") {
      console.log("Creating project folder...");
      fs.mkdirSync(targetPath);
    }

    await copyTemplate(templatePath, targetPath, {
      "project-name": projectName === "." ? path.basename(process.cwd()) : projectName,
      "author": os.userInfo().username || "author",
    });

    if (!includeCrud) {
      console.log("🗑️ Removing CRUD files...");
      removeCrud(targetPath);
      removeCrudReferences(path.join(targetPath, "src", "app.js"));
    } else {
      console.log("✅ Including CRUD functionality...");
    }

    console.log(`✅ Project "${projectName}" created successfully!`);
    console.log(`\ncd ${projectName === "." ? "" : projectName}`);
    console.log("npm install");
    console.log("npm run dev (or npm start)\n");

  } catch (err) {
    console.error("Failed to create project:", err);
    process.exit(1);
  }
}

