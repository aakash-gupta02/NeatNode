import express from "express";

// ROUTE_IMPORTS_START
import authRoute from './user.route.js'
// ROUTE_IMPORTS_END
/* <NEATNODE_IMPORTS> */
// Reserved for NeatNode file generation. Do not remove or modify.



// instance
const router = express.Router();


// ROUTE_USES_START
router.use("/auth", authRoute);
// ROUTE_USES_END
/* <NEATNODE_ROUTES> */
// Reserved for NeatNode file generation. Do not remove or modify.



export default router;
