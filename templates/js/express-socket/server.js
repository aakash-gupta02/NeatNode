import http from "http";
import app from "./src/app.js";
import { config } from "./src/config/env.config.js";
import { initSocket } from "./src/config/socket.js";
import logger from "./src/config/logger.js";
import { connectDB } from "./src/config/db.config.js";

const PORT = config.port || 3000;
const server = http.createServer(app);

initSocket(server);
connectDB();

// Start the server
server.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

