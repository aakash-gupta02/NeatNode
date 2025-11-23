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

export async function downloadTemplate(repoPath) {
  const tempZip = path.join(__dirname, "repo.zip");
  const tempExtractDir = path.join(__dirname, "repo-extract");
  const tempFinalDir = path.join(__dirname, "template-final");

  const response = await axios({
    url: zipUrl,
    responseType: "arraybuffer",
  });

  fs.writeFileSync(tempZip, response.data);

  await extract(tempZip, { dir: tempExtractDir });

  const extractedRoot = path.join(tempExtractDir, `${repo}-main`);
  const srcTemplatePath = path.join(extractedRoot, repoPath);

  // ensure final directory exists
  fs.rmSync(tempFinalDir, { recursive: true, force: true });
  fs.mkdirSync(tempFinalDir, { recursive: true });

  fs.cpSync(srcTemplatePath, tempFinalDir, { recursive: true });

  // cleanup zip + extract folder
  fs.rmSync(tempZip);
  fs.rmSync(tempExtractDir, { recursive: true, force: true });

  console.log("✔ Template downloaded & extracted");
  return tempFinalDir;
}

