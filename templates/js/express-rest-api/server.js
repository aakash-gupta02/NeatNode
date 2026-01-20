import app from "./src/app.js";
import { connectDB } from "./src/config/db.config.js";
import { config } from "./src/config/env.config.js";
import logger from "./src/config/logger.config.js";
const PORT = config.port || 3000;

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

