import axios from "axios";
import extract from "extract-zip";
import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const owner = "aakash-gupta02";
const repo = "NeatNode";

const zipUrl = `https://codeload.github.com/${owner}/${repo}/zip/refs/heads/main`;

export async function downloadTemplate(repoPath) {
  // SAFE TEMP DIRECTORY
  const tmpBase = fs.mkdtempSync(path.join(os.tmpdir(), "neatnode-"));

  const tempZip = path.join(tmpBase, "repo.zip");
  const tempExtractDir = path.join(tmpBase, "repo-extract");
  const tempFinalDir = path.join(tmpBase, "template-final");

  // download zip
  const response = await axios({
    url: zipUrl,
    responseType: "arraybuffer",
  });

  fs.writeFileSync(tempZip, response.data);

  // unzip
  await extract(tempZip, { dir: tempExtractDir });

  const extractedRoot = path.join(tempExtractDir, `${repo}-main`);
  const srcTemplatePath = path.join(extractedRoot, repoPath);

  // copy template
  fs.mkdirSync(tempFinalDir, { recursive: true });
  fs.cpSync(srcTemplatePath, tempFinalDir, { recursive: true });

  console.log("✔ Template downloaded & extracted");

  return tempFinalDir;
}
