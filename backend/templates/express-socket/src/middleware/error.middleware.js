import { config } from "../config/env.config.js";
import ApiError from "../utils/ApiError.js";


// Global error handling middleware
export const errorHandler = (err, req, res, next) => {
  console.error("Error 💥", err);

  let { statusCode, message } = err;
  if (!statusCode) statusCode = 500;

  // Handle operational errors
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // For unexpected errors (like coding bugs, db crashes, etc.)
  res.status(statusCode).json({
    success: false,
    message,
  });
};

// Handle invalid routes
export const notFound = (req, res, next) => {
  const error = new ApiError(404, `Not Found - ${req.originalUrl}`);
  next(error);
};
