import { StatusCodes } from "http-status-codes";
import { config } from "../config/env.config.js";
import logger from "../config/logger.js"
import ApiError from "../utils/ApiError.js";


// Global error handling middleware
export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const isDev = config.nodeEnv === "development";

  logger.error(
    `Error 💥
    Message: ${err.message}
    StatusCode: ${statusCode}
    Operational: ${err.isOperational}
    Stack: ${err.stack}`
  );

  // Operational (trusted) errors
  if (err.isOperational) {
    return res.status(statusCode).json({
      success: false,
      message: err.message || "Something went wrong!",
    });
  }

  // Programmer / unknown errors
  res.status(statusCode).json({
    success: false,
    message: isDev ? err.message : "Internal Server Error",
  });
};


// Handle invalid routes
export const notFound = (req, res, next) => {
  const error = new ApiError(StatusCodes.NOT_FOUND, `Not Found - ${req.originalUrl}`);
  next(error);
};
