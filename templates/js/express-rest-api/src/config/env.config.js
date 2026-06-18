import dotenv from "dotenv";
dotenv.config({ quiet: true });

export const config = {
  dbUri: process.env.MONGODB_URI,

  port: process.env.PORT || 4000,

  nodeEnv: process.env.NODE_ENV || "development",

  allowedOrigins: [
    process.env.CLIENT_URL,
    "http://localhost:5137",
  ].filter(Boolean),

  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",

    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  },

  rateLimit: {
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
    max: Number(process.env.RATE_LIMIT_MAX) || 100,
  },
};
