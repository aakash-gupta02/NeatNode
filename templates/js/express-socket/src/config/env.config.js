import dotenv from "dotenv";
dotenv.config();

export const config = {
    jwtSecret: process.env.JWT_SECRET,
    dbUri: process.env.MONGODB_URI,
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || "development"
    
}