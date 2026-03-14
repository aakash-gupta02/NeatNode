import { Router } from "express";

import authRoutes from "../modules/auth/auth.route.js";
// ROUTE_IMPORTS_START
import userRoutes from "../modules/user/user.route.js";
// ROUTE_IMPORTS_END

const router = Router();

router.use("/auth", authRoutes);
// ROUTE_USES_START
router.use("/users", userRoutes);
// ROUTE_USES_END

export default router;
