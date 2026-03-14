import mongoose from "mongoose";

import { env } from "./env.js";
import { logger } from "./logger.js";

export const connectDB = async (): Promise<void> => {
  await mongoose.connect(env.MONGODB_URI);
  logger.info("MongoDB connected");
};
