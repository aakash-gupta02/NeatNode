import mongoose from "mongoose";
import { config } from "./env.config.js";
import logger from "./logger.config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(config.dbUri);
        logger.info("✔ Database connected");

    } catch (error) {
        logger.error("✖ Database connection error:", error);
        process.exit(1);
    }
}