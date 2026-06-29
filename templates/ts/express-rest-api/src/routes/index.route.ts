import { Router } from "express";

// ROUTE_IMPORTS_START
import authRoutes from "../modules/auth/auth.route.js";
// ROUTE_IMPORTS_END
/* <NEATNODE_IMPORTS> */
// Reserved for NeatNode file generation. Do not remove or modify.

const router = Router();

// ROUTE_USES_START
router.use("/auth", authRoutes);
// ROUTE_USES_END
/* <NEATNODE_ROUTES> */
// Reserved for NeatNode file generation. Do not remove or modify.

export default router;
