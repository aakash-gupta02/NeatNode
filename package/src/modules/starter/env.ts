import fs from "fs";
import path from "path";

export function addEnv(targetPath: string): void {
  try {
    const envExamplePath = path.join(targetPath, ".env.example");
    const envPath = path.join(targetPath, ".env");

    if (!fs.existsSync(envExamplePath) || fs.existsSync(envPath)) {
      return;
    }

    const envContent = fs.readFileSync(envExamplePath, "utf8");

    fs.writeFileSync(envPath, envContent, "utf8");
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Error adding .env file:", message);
  }
}
