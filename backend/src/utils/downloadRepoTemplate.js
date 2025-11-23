import axios from "axios";
import extract from "extract-zip";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// your repo
const owner = "aakash-gupta02";
const repo = "NeatNode";

// GitHub codeload URL
const zipUrl = `https://codeload.github.com/${owner}/${repo}/zip/refs/heads/main`;

export async function downloadTemplate(repoPath, destDir) {
  const tempZip = path.join(__dirname, "repo.zip");
  const tempExtractDir = path.join(__dirname, "repo-extract");

  // 1. Download ZIP
  const response = await axios({
    url: zipUrl,
    responseType: "arraybuffer",
  });

  fs.writeFileSync(tempZip, response.data);

  // 2. Extract to temp folder
  await extract(tempZip, { dir: tempExtractDir });

  // repository folder after extraction → NeatNode-main
  const extractedRoot = path.join(tempExtractDir, `${repo}-main`);

  // 3. Locate template folder inside extracted repo
  const templateDir = path.join(extractedRoot, repoPath);

  // 4. Copy template to destination
  fs.cpSync(templateDir, destDir, { recursive: true });

  // 5. Cleanup
  fs.rmSync(tempZip);
  fs.rmSync(tempExtractDir, { recursive: true, force: true });

  console.log("✔ Template downloaded & extracted");
}
