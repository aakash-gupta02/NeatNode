import express from "express";
import authRoute from "../modules/user/user.route.js";
import sendResponse from "../core/utils/ApiResponse.js";
import { StatusCodes } from "http-status-codes";
import { healthRateLimiter } from "../core/middleware/rateLimiter.js";

// instance
const router = express.Router();

// health check route with rate limiting
router.get("/health", healthRateLimiter, (req, res) => {
    sendResponse(res, StatusCodes.OK, "ALL IS WELL😂...");
});

// Routes
router.use("/auth", authRoute);



export default router;
