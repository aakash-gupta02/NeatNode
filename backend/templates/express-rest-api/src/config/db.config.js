import mongoose from "mongoose";
import { config } from "./env.config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(config.dbUri);
        console.log("✔ Database connected");

    } catch (error) {
        console.error("✖ Database connection error:", error);
        process.exit(1);
    }
}