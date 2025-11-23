import { Router } from "express";
import { sendResponse } from "../utils/responseHandler.js";

const router = Router();

router.get("/", (req, res) => {
  sendResponse(res, "its a index route");
});

export default router;
