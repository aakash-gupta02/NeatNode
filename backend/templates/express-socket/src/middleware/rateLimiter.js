import rateLimit from "express-rate-limit";


export const rateLimiter = (max = 10) =>
    rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max, // limit each IP to max requests per windowMs
        message: {
            success: false,
            message: "Too many requests, please try again later."
        },
        standardHeaders: true, // return rate limit info in headers
        legacyHeaders: false,
    });
