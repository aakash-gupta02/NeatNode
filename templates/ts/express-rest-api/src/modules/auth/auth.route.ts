import { Router } from "express";

import { authMiddleware, refreshTokenMiddleware } from "../../middlewares/auth.middleware.js";
import { authRateLimiter } from "../../middlewares/rateLimiter.middleware.js";
import { validateBody } from "../../middlewares/validateRequest.middleware.js";
import { login, logout, me, refreshToken, register } from "./auth.controller.js";
import { loginSchema, registerSchema } from "./auth.validation.js";

const router = Router();

router.post("/register", authRateLimiter, validateBody(registerSchema), register);
router.post("/login", authRateLimiter, validateBody(loginSchema), login);
router.get("/me", authMiddleware, me);

router.post("/logout", refreshTokenMiddleware, logout);

router.post("/refresh", refreshTokenMiddleware, refreshToken);

export default router;