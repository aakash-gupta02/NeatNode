import morgan from "morgan";
import { logger } from "../config/logger.js";

export const requestLogger = morgan(
  ":method :url :status :response-time ms :res[content-length]  :remote-addr",
);