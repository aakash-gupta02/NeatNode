import app from "./src/app.js";
import { connectDB } from "./src/core/config/db.config.js";
import { config } from "./src/core/config/env.config.js";
import logger from "./src/core/config/logger.config.js";
const PORT = config.port;

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

