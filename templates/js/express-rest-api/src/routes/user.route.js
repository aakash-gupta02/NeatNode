import express from "express";
import {
  getUser,
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
} from "../controllers/user.controller.js";
import { createUserInput, loginInput } from "../validations/user.validation.js";
import { protect, refreshTokenMiddleware } from "../middleware/auth.middleware.js";
import { validateBody } from "../middleware/validateRequest.middleware.js";
import { authRateLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post(
  "/register",
  authRateLimiter,
  validateBody(createUserInput),
  registerUser,
);
router.post("/login", authRateLimiter, validateBody(loginInput), loginUser);

router.get("/me", protect, getUser);

router.post("/logout", refreshTokenMiddleware, logoutUser);
router.post("/refresh", refreshTokenMiddleware, refreshToken);

export default router;
