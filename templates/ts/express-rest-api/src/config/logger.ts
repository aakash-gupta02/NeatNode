import { createLogger, format, transports } from "winston";

const isProd = process.env.NODE_ENV === "production";

export const logger = createLogger({
  level: isProd ? "info" : "debug",
  format: isProd
    ? format.combine(format.timestamp(), format.errors({ stack: true }), format.json())
    : format.combine(
        format.colorize(),
        format.timestamp({ format: "YY-MM-DD hh:mm:ss A" }),
        format.printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`),
      ),
  transports: [new transports.Console()],
});
