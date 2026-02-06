import { StatusCodes } from "http-status-codes";
import { config } from "../config/env.config.js";
import logger from "../config/logger.config.js";
import ApiError from "../utils/ApiError.js";

// Global error handling middleware
export const errorHandler = (err, req, res, next) => {
  const statusCode =
    err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;

  const isDev = config.nodeEnv === "development";
  const isOperational = err.isOperational === true;

  /* -------------------- LOGGING -------------------- */

  if (isOperational) {
    // Expected / business errors
    logger.warn({
      message: err.message,
      statusCode,
      route: req.originalUrl,
      method: req.method,
    });
  } else {
    // Programmer / system errors
    logger.error({
      message: err.message,
      statusCode,
      route: req.originalUrl,
      method: req.method,
      stack: err.stack,
    });
  }

  /* -------------------- RESPONSE -------------------- */

  // Operational (trusted) errors
  if (isOperational) {
    return res.status(statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Unknown / programmer errors
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: isDev ? err.message : "Internal Server Error",
  });
};

/* -------------------- 404 HANDLER -------------------- */
export const notFound = (req, res, next) => {
  next(
    new ApiError(
      StatusCodes.NOT_FOUND,
      `Not Found - ${req.originalUrl}`
    )
  );
};
