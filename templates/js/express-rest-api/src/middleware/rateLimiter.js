import rateLimit from "express-rate-limit";

const createRateLimiter = (
  max = 10,
  windowMs = 15 * 60 * 1000,
  message = "Too many requests, please try again later.",
  skipSuccessfulRequests = false,
) =>
  rateLimit({
    windowMs,
    max,
    message: {
      success: false,
      message,
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests,
  });

export const rateLimiter = (max = 10) => createRateLimiter(max);

export const authRateLimiter = createRateLimiter(
  5,
  15 * 60 * 1000,
  "Too many login attempts, please try again after 15 minutes.",
  true,
);
