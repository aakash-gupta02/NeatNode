import axios from "axios";
import decompress from "decompress";
import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OWNER = "aakash-gupta02";
const REPO = "NeatNode";

type RefType = "tag" | "branch";

interface PackageJson {
  version: string;
}

interface RefCandidate {
  ref: string;
  refType: RefType;
}

interface DownloadFromRefOptions {
  repoPath: string;
  ref: string;
  refType: RefType;
}

export function getPackageVersion(): string {
  try {
    const pkgPath = path.resolve(__dirname, "../../../package.json");

    const pkg: PackageJson = JSON.parse(fs.readFileSync(pkgPath, "utf8"));

    return pkg.version;
  } catch {
    throw new Error("Failed to read NeatNode package version.");
  }
}

function getTemplateRef(): string {
  if (process.env.NEATNODE_TEMPLATE_REF) {
    return process.env.NEATNODE_TEMPLATE_REF;
  }

  const version = getPackageVersion();

  return version ? `v${version}` : "main";
}

function getZipUrl(ref: string, refType: RefType = "tag"): string {
  if (refType === "branch") {
    return `https://codeload.github.com/${OWNER}/${REPO}/zip/refs/heads/${ref}`;
  }

  return `https://codeload.github.com/${OWNER}/${REPO}/zip/refs/tags/${ref}`;
}

async function downloadFromRef({
  repoPath,
  ref,
  refType,
}: DownloadFromRefOptions): Promise<string> {
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

  await decompress(tempZip, tempExtractDir);

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

  fs.mkdirSync(tempFinalDir, {
    recursive: true,
  });

  fs.cpSync(srcTemplatePath, tempFinalDir, {
    recursive: true,
  });

  return tempFinalDir;
}

export async function downloadTemplate(repoPath: string): Promise<string> {
  const packageRoot = path.resolve(__dirname, "../..");
  const packagedTemplatePath = path.join(packageRoot, repoPath);

  if (fs.existsSync(packagedTemplatePath)) {
    return packagedTemplatePath;
  }

  const preferredRef = getTemplateRef();

  const candidates: RefCandidate[] = [
    {
      ref: preferredRef,
      refType: "tag",
    },
    {
      ref: "main",
      refType: "branch",
    },
  ];

  const uniqueCandidates = candidates.filter(
    (candidate, index, array) =>
      array.findIndex(
        (item) =>
          item.ref === candidate.ref && item.refType === candidate.refType,
      ) === index,
  );

  const errors: string[] = [];

  for (const candidate of uniqueCandidates) {
    try {
      return await downloadFromRef({
        repoPath,
        ref: candidate.ref,
        refType: candidate.refType,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);

      errors.push(`${candidate.refType}:${candidate.ref} -> ${message}`);
    }
  }

  throw new Error(
    `Failed to download template from all sources. ${errors.join(" | ")}`,
  );
}
