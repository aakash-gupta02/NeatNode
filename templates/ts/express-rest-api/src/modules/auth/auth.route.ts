import { Router } from "express";

import { login, logout, me, refreshToken, register } from "./auth.controller.js";
import { loginInput, registerInput } from "./auth.validation.js";
import { authMiddleware, refreshTokenMiddleware } from "../../core/middlewares/auth.middleware.js";
import { authRateLimiter } from "../../core/middlewares/rateLimiter.middleware.js";
import { validateBody } from "../../core/middlewares/validateRequest.middleware.js";

const router = Router();

router.post("/register", authRateLimiter, validateBody(registerInput), register);
router.post("/login", authRateLimiter, validateBody(loginInput), login);
router.get("/me", authMiddleware, me);

router.post("/logout", refreshTokenMiddleware, logout);

router.post("/refresh", refreshTokenMiddleware, refreshToken);

export default router;