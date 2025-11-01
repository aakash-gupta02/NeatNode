import { Router } from "express";
import { sendResponse } from "../utils/responseHandler.js";

export const router = Router();

router.get("/", (req, res) => {
  sendResponse(res, "its a index route");
});
