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
    return null;
  }
};

const getTemplateRef = () => {
  if (process.env.NEATNODE_TEMPLATE_REF) {
    return process.env.NEATNODE_TEMPLATE_REF;
  }

  const version = getPackageVersion();

  if (!version) {
    return "main";
  }

  return `v${version}`;
};

const getZipUrl = (ref, refType = "tag") => {
  if (refType === "branch") {
    return `https://codeload.github.com/${owner}/${repo}/zip/refs/heads/${ref}`;
  }
  return `https://codeload.github.com/${owner}/${repo}/zip/refs/tags/${ref}`;
};

const downloadFromRef = async ({ repoPath, ref, refType }) => {
  const zipUrl = getZipUrl(ref, refType);

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

  const extractedRootDir = fs
    .readdirSync(tempExtractDir, { withFileTypes: true })
    .find((entry) => entry.isDirectory());

  if (!extractedRootDir) {
    throw new Error(
      `Could not locate extracted template root directory for ${refType} "${ref}".`,
    );
  }

  const extractedRoot = path.join(tempExtractDir, extractedRootDir.name);
  const srcTemplatePath = path.join(extractedRoot, repoPath);

  if (!fs.existsSync(srcTemplatePath)) {
    throw new Error(
      `Template path "${repoPath}" not found in ${refType} "${ref}" archive.`,
    );
  }

  fs.mkdirSync(tempFinalDir, { recursive: true });
  fs.cpSync(srcTemplatePath, tempFinalDir, { recursive: true });
  return tempFinalDir;
};

export async function downloadTemplate(repoPath) {
  const packageRoot = path.resolve(__dirname, "../..");
  const packagedTemplatePath = path.join(packageRoot, repoPath);

  if (fs.existsSync(packagedTemplatePath)) {
    return packagedTemplatePath;
  }

  const preferredRef = getTemplateRef();
  const candidates = [
    { ref: preferredRef, refType: "tag" },
    { ref: "main", refType: "branch" },
  ];

  const uniqueCandidates = candidates.filter(
    (candidate, index, arr) =>
      arr.findIndex(
        (item) =>
          item.ref === candidate.ref && item.refType === candidate.refType,
      ) === index,
  );

  const errors = [];

  for (const candidate of uniqueCandidates) {
    try {
      const templatePath = await downloadFromRef({
        repoPath,
        ref: candidate.ref,
        refType: candidate.refType,
      });

      console.log(
        `Template downloaded and extracted from ${candidate.refType} "${candidate.ref}"`,
      );
      return templatePath;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push(`${candidate.refType}:${candidate.ref} -> ${message}`);
    }
  }

  throw new Error(
    `Failed to download template from all sources. ${errors.join(" | ")}`,
  );
}
