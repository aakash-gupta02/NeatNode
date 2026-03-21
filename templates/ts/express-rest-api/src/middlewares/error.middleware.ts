import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";

import { env } from "../config/env.js";
import { logger } from "../config/logger.js";
import ApiError from "../utils/ApiError.js";

// Define custom error types for better type checking and error handling
type MongoError = Error & { code?: number; keyValue?: Record<string, unknown> };
type MongooseValidationError = Error & {
  name?: string;
  errors?: Record<string, { path?: string; message?: string }>;
};
type MongooseCastError = Error & { name?: string; path?: string; message?: string };

export const errorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const errorMessage = error instanceof Error ? error.message : "Unknown error";
  const stack = error instanceof Error ? error.stack : undefined;
  const isDev = env.NODE_ENV === "development";

  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = isDev ? errorMessage : "Internal Server Error";
  let errors: unknown[] = [];
  let isOperational = false; // Indicates if the error is expected and handled (operational) or an unexpected/unhandled error

  if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errors = error.errors;
    isOperational = true;

  } else if (error instanceof ZodError) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Validation failed";
    errors = error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message,
    }));
    isOperational = true;

  } else if ((error as MongooseValidationError)?.name === "ValidationError") {
    const validationError = error as MongooseValidationError;

    statusCode = StatusCodes.BAD_REQUEST;
    message = "Validation failed";
    errors = Object.values(validationError.errors ?? {}).map((fieldError) => ({
      path: fieldError.path,
      message: fieldError.message,
    }));
    isOperational = true;

  } else if ((error as MongooseCastError)?.name === "CastError") {
    const castError = error as MongooseCastError;

    statusCode = StatusCodes.BAD_REQUEST;
    message = "Invalid input value";
    errors = [
      {
        path: castError.path,
        message: castError.message,
      },
    ];
    isOperational = true;

  } else {
    const mongoError = error as MongoError;
    if (mongoError.code === 11000) {
      statusCode = StatusCodes.CONFLICT;
      message = "Duplicate value detected";
      errors = Object.keys(mongoError.keyValue ?? {}).map((key) => ({
        path: key,
        message: `${key} already exists`,
      }));
      isOperational = true;
    }
  }

  const logMeta = {
    statusCode,
    method: req.method,
    route: req.originalUrl,
  };

  if (isOperational) {
    logger.warn(`Operational error: ${message}`, logMeta);
  } else {
    logger.error(`Unhandled error: ${errorMessage}`, { ...logMeta, stack, error });
  }

  const responseStatusCode = isOperational
    ? statusCode
    : StatusCodes.INTERNAL_SERVER_ERROR;

  res.status(responseStatusCode).json({
    success: false,
    message,
    ...(errors.length > 0 ? { errors } : {}),
  });
};
