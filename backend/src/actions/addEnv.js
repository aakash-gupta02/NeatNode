import fs from "fs";
import path from "path";

export async function addEnv({ targetPath }) {
  try {
    const envExamplePath = path.join(targetPath, ".env.example");
    const envPath = path.join(targetPath, ".env");

    if (
      fs.existsSync(envExamplePath) &&
      !fs.existsSync(envPath)
    ) {
      const envContent = fs.readFileSync(envExamplePath, "utf8");

      fs.writeFileSync(envPath, envContent, "utf8");
    }
  } catch (error) {
    console.error("Error adding .env file:", error);
  }
}