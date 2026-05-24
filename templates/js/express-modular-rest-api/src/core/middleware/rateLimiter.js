import rateLimit from "express-rate-limit";

const CreateRateLimiter = (
    max = 10,
    windowMs = 15 * 60 * 1000,
    message = "Too many requests, please try again later.",
    skipSuccessfulRequests = false
) =>
    rateLimit({
        windowMs,
        max,
        message: {
            success: false,
            message,
        },
        standardHeaders: true, // return rate limit info in headers
        legacyHeaders: false,
        skipSuccessfulRequests
    });

export const authRateLimiter = CreateRateLimiter(
    5,
    15 * 60 * 1000,
    "Too many login attempts, please try again after 15 minutes.",
    true // only count failed attempts
);

export const healthRateLimiter = CreateRateLimiter(
    100,
    60 * 60 * 1000,
    "Too many requests from this IP, please try again after an hour."
);