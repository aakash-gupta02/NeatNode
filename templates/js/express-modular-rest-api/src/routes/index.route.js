import express from "express";
import { StatusCodes } from "http-status-codes";
import { healthRateLimiter } from "../core/middleware/rateLimiter.js";

// ROUTE_IMPORTS_START
import authRoute from "../modules/user/user.route.js";
import sendResponse from "../shared/utils/ApiResponse.js";
// ROUTE_IMPORTS_END


// instance
const router = express.Router();

// Routes
// health check route with rate limiting
router.get("/health", healthRateLimiter, (req, res) => {
    sendResponse(res, StatusCodes.OK, "ALL IS WELL😂...");
});

// ROUTE_USES_START
router.use("/auth", authRoute);
// ROUTE_USES_END



export default router;
