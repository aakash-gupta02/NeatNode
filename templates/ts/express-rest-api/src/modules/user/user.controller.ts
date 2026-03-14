import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import sendResponse from "../../utils/ApiResponse.js";
import CatchAsync from "../../utils/CatchAsync.js";
import { getProfileService, updateProfileService } from "./user.service.js";

export const getProfile = CatchAsync(async (req: Request, res: Response) => {
  const user = await getProfileService(req.user!.userId);
  sendResponse(res, StatusCodes.OK, "User profile fetched", { user });
});

export const updateProfile = CatchAsync(async (req: Request, res: Response) => {
  const user = await updateProfileService(req.user!.userId, req.body);
  sendResponse(res, StatusCodes.OK, "User profile updated", { user });
});
