import { Router } from "express";

import { login, logout, me, refreshToken, register } from "./auth.controller.js";
import { loginSchema, registerSchema } from "./auth.validation.js";
import { authMiddleware, refreshTokenMiddleware } from "../../core/middlewares/auth.middleware.js";
import { authRateLimiter } from "../../core/middlewares/rateLimiter.middleware.js";
import { validateBody } from "../../core/middlewares/validateRequest.middleware.js";

const router = Router();

router.post("/register", authRateLimiter, validateBody(registerSchema), register);
router.post("/login", authRateLimiter, validateBody(loginSchema), login);
router.get("/me", authMiddleware, me);

router.post("/logout", refreshTokenMiddleware, logout);

router.post("/refresh", refreshTokenMiddleware, refreshToken);

export default router;