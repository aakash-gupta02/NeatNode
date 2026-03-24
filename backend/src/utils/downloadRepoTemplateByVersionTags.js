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

const getPackageVersion = () => {
  try {
    const pkgPath = path.resolve(__dirname, "../../package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    return pkg.version;
  } catch {
    return "3.1.7";
  }
};

const getTemplateRef = () => {
  if (process.env.NEATNODE_TEMPLATE_REF) {
    return process.env.NEATNODE_TEMPLATE_REF;
  }
  return `v${getPackageVersion()}`;
};

const getZipUrl = (ref) => `https://codeload.github.com/${owner}/${repo}/zip/refs/tags/${ref}`;

export async function downloadTemplate(repoPath) {
  const packageRoot = path.resolve(__dirname, "../..");
  const packagedTemplatePath = path.join(packageRoot, repoPath);

  if (fs.existsSync(packagedTemplatePath)) {
    return packagedTemplatePath;
  }

  const ref = getTemplateRef();
  const zipUrl = getZipUrl(ref);

  const tmpBase = fs.mkdtempSync(path.join(os.tmpdir(), "neatnode-"));
  const tempZip = path.join(tmpBase, "repo.zip");
  const tempExtractDir = path.join(tmpBase, "repo-extract");
  const tempFinalDir = path.join(tmpBase, "template-final");

  const response = await axios({
    url: zipUrl,
    responseType: "arraybuffer",
  });

  fs.writeFileSync(tempZip, response.data);
  await extract(tempZip, { dir: tempExtractDir });

  const extractedRootDir = fs.readdirSync(tempExtractDir, { withFileTypes: true })
    .find((entry) => entry.isDirectory());

  if (!extractedRootDir) {
    throw new Error("Could not locate extracted template root directory.");
  }

  const extractedRoot = path.join(tempExtractDir, extractedRootDir.name);
  const srcTemplatePath = path.join(extractedRoot, repoPath);

  if (!fs.existsSync(srcTemplatePath)) {
    throw new Error(`Template path not found in downloaded archive: ${repoPath}`);
  }

  fs.mkdirSync(tempFinalDir, { recursive: true });
  fs.cpSync(srcTemplatePath, tempFinalDir, { recursive: true });

  console.log(`Template downloaded and extracted from ref "${ref}"`);

  return tempFinalDir;
}
