import winston from "winston";

const { combine, timestamp, printf, colorize } = winston.format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(colorize(), timestamp({ format: "HH:mm:ss" }), logFormat),
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: "logs/app.log" })
    
  ],
});

export default logger;

