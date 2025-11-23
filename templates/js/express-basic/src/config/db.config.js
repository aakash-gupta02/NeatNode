import mongoose from "mongoose";
import envConfig from "./env.config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(envConfig.MONGODB_URI);
    console.log("Database connected");

  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};
