import express from "express";
// ROUTE_IMPORTS_START
import authRoute from './user.route.js'
// ROUTE_IMPORTS_END

// instance
const router = express.Router();

// ROUTE_USES_START
router.use("/auth", authRoute);
// ROUTE_USES_END



export default router;
