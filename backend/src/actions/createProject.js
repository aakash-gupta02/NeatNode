import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";
import { copyTemplate } from "../utils/copyTemplate.js";
import { removeCrud, removeCrudReferences } from "./removeCRUD.js";
import { downloadTemplate } from "../utils/downloadRepoTemplate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject({ projectName, repoPath, includeCrud, crudName }) {
  try {
    // Resolve the final project path
    const targetPath =
      projectName === "."
        ? process.cwd()
        : path.join(process.cwd(), projectName);

    // Prevent overwriting existing folder
    if (fs.existsSync(targetPath) && projectName !== ".") {
      console.error(`❌ Folder "${projectName}" already exists.`);
      process.exit(1);
    }

    // Create folder if not using current directory
    if (projectName !== ".") {
      console.log("📁 Creating project folder...");
      fs.mkdirSync(targetPath);
    }

    // 1️⃣ Download template to temp folder
    console.log("⬇️ Downloading template...");
    const extractedTemplatePath = await downloadTemplate(repoPath);

    // 2️⃣ Copy downloaded template → target folder
    await copyTemplate(extractedTemplatePath, targetPath, {
      "project-name":
        projectName === "." ? path.basename(process.cwd()) : projectName,
      author: os.userInfo().username || "author",
    });

    // 3️⃣ Remove CRUD if user said NO
    if (!includeCrud) {
      console.log("🗑️ Removing CRUD files...");
      removeCrud(targetPath, crudName);
      removeCrudReferences(path.join(targetPath, "src", "app.js"));
    }

    // 4️⃣ Final success message
    console.log(`\n✅ Project "${projectName}" created successfully!`);
    console.log(`\n📂 Next steps:`);
    console.log(`cd ${projectName === "." ? "" : projectName}`);
    console.log("npm install");
    console.log("npm run dev (or npm start)\n");

  } catch (err) {
    console.error("❌ Failed to create project:", err.message);
    process.exit(1);
  }
}
