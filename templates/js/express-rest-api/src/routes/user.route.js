import express from "express";
import { getUser, registerUser, loginUser } from "../controllers/user.controller.js";
import { createUserSchema, loginSchema } from "../schemas/user.schema.js";
import { protect } from "../middleware/auth.middleware.js";
import { validateBody } from "../middleware/validateRequest.middleware.js";

const router = express.Router();

router.get("/me", protect, getUser);
router.post("/register", validateBody(createUserSchema), registerUser);
router.post("/login", validateBody(loginSchema), loginUser);


export default router;
