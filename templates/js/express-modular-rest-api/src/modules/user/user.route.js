import express from "express";
import {
  protect,
  refreshTokenMiddleware,
} from "../../core/middleware/auth.middleware.js";
import {
  getUser,
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
} from "./user.controller.js";
import { validateBody } from "../../core/middleware/validateRequest.middleware.js";
import { createUserInput, loginInput } from "./user.validation.js";
import { authRateLimiter } from "../../core/middleware/rateLimiter.js";

const router = express.Router();

// Login & register routes
router.post(
  "/register",
  authRateLimiter,
  validateBody(createUserInput),
  registerUser,
);
router.post("/login", authRateLimiter, validateBody(loginInput), loginUser);

// Protected route to get user details
router.get("/me", protect, getUser);

router.post("/logout", refreshTokenMiddleware, logoutUser);
router.post("/refresh", refreshTokenMiddleware, refreshToken);

export default router;
