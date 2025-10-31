import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { copyTemplate } from "../utils/copyTemplate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject({ projectName, templatePath }) {
  try {
    const targetPath = path.join(process.cwd(), projectName);

    // Prevent overwriting existing folder
    if (fs.existsSync(targetPath)) {
      console.error(`❌ Folder "${projectName}" already exists.`);
      process.exit(1);
    }

    // Copy template
    console.log("📁 Creating project folder...");
    fs.mkdirSync(targetPath);
    await copyTemplate(templatePath, targetPath, {
      "project-name": projectName,
      "author": "Your Name"

    });

    console.log(`✅ Project "${projectName}" created successfully!`);
    console.log(`\ncd ${projectName}`);
    console.log("npm install");
    console.log("npm run dev (or npm start)\n");
  } catch (err) {
    console.error("Failed to create project:", err);
    process.exit(1);
  }
}
