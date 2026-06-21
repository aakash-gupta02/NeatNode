import app from "./app.js";
import { connectDB } from "./core/config/db.js";
import { env } from "./core/config/env.js";
import { logger } from "./core/config/logger.js";

const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(env.PORT, () => {
    logger.info(`Server running on http://localhost:${env.PORT}`);
  });
};

startServer().catch((error: unknown) => {
  logger.error("Failed to start server", { error });
  process.exit(1);
});
