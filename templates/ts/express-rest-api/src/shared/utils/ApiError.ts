class ApiError extends Error {
  statusCode: number;
  errors: unknown[];
  isOperational: boolean;

  constructor(statusCode: number, message: string, errors: unknown[] = [], stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = true;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
