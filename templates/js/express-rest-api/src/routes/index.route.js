import express from "express";
<<<<<<< feat/file-generator
// ROUTE_IMPORTS_START
import authRoute from './user.route.js'
// ROUTE_IMPORTS_END
=======

// ROUTE_IMPORTS_START
import authRoute from './user.route.js'
// ROUTE_IMPORTS_END
/* <NEATNODE_IMPORTS> */
// Reserved for NeatNode file generation. Do not remove or modify.


>>>>>>> main

// instance
const router = express.Router();

<<<<<<< feat/file-generator
// ROUTE_USES_START
router.use("/auth", authRoute);
// ROUTE_USES_END
=======

// ROUTE_USES_START
router.use("/auth", authRoute);
// ROUTE_USES_END
/* <NEATNODE_ROUTES> */
// Reserved for NeatNode file generation. Do not remove or modify.
>>>>>>> main



export default router;
