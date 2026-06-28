import fs from "fs";
import path from "path";

export function writeFile(output, content) {
  fs.mkdirSync(path.dirname(output), {
    recursive: true,
  });

  fs.writeFileSync(output, content, "utf8");
}
