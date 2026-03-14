import { Router } from "express";

import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { validateBody } from "../../middlewares/validateRequest.middleware.js";
import { getProfile, updateProfile } from "./user.controller.js";
import { updateProfileSchema } from "./user.validation.js";

const router = Router();

router.get("/profile", authMiddleware, getProfile);
router.patch("/profile", authMiddleware, validateBody(updateProfileSchema), updateProfile);

export default router;