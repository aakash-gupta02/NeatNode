import express from "express";
import { getUser, createUser, loginUser } from "../controllers/user.controller.js";
import { createUserSchema, loginSchema } from "../schemas/user.schema.js";
import validate from "../middleware/validateRequest.middleware.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/me", protect, getUser);
router.post("/create", validate(createUserSchema), createUser);
router.post("/login", validate(loginSchema), loginUser);


export default router;
