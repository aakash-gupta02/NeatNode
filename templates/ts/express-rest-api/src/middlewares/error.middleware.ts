import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";

import { logger } from "../config/logger.js";
import ApiError from "../utils/ApiError.js";

type MongoError = Error & { code?: number; keyValue?: Record<string, unknown> };

export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";
  let errors: unknown[] = [];

  if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    errors = error.errors;
  } else if (error instanceof ZodError) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Validation failed";
    errors = error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message,
    }));
  } else {
    const mongoError = error as MongoError;
    if (mongoError.code === 11000) {
      statusCode = StatusCodes.CONFLICT;
      message = "Duplicate value detected";
      errors = Object.keys(mongoError.keyValue ?? {}).map((key) => ({
        path: key,
        message: `${key} already exists`,
      }));
    }
  }

  logger.error(message, { statusCode, error });

  res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};
