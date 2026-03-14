import { Router } from "express";

// ROUTE_IMPORTS_START
import authRoutes from "../modules/auth/auth.route.js";
// ROUTE_IMPORTS_END

const router = Router();

// ROUTE_USES_START
router.use("/auth", authRoutes);
// ROUTE_USES_END

export default router;
