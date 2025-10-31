import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    name: "Basic Express",
    path: path.join(__dirname, "../../templates/express-basic")
  },
  {
    name: "REST API",
    path: path.join(__dirname, "../../templates/express-rest-api")
  },
  {
    name: "Socket.IO Setup",
    path: path.join(__dirname, "../../templates/express-socket")
  }
];
