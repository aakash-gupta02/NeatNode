import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import sendResponse from "../../shared/utils/ApiResponse.js";
import CatchAsync from "../../shared/utils/CatchAsync.js";
import { loginService, logoutService, meService, refreshTokensService, registerService } from "./auth.service.js";

// Register a new user
export const register = CatchAsync(async (req: Request, res: Response) => {
  const { accessToken, refreshToken, user } = await registerService(req.body);

  sendResponse(res, StatusCodes.CREATED, "User registered successfully", {
    user,
    accessToken,
    refreshToken,
  });
});

// Login an existing user
export const login = CatchAsync(async (req: Request, res: Response) => {
  const { accessToken, refreshToken, user } = await loginService(req.body);

  sendResponse(res, StatusCodes.OK, "Login successful", { user, accessToken, refreshToken });
});

// Get the profile of the currently authenticated user
export const me = CatchAsync(async (req: Request, res: Response) => {
  const user = await meService(req.user.userId);
  sendResponse(res, StatusCodes.OK, "User profile fetched", { user });
});

// Logout the user by clearing the authentication cookie
export const logout = CatchAsync(async (req: Request, res: Response) => {
  await logoutService(req.user.userId);

  sendResponse(res, StatusCodes.OK, "Logout successful");
});

// Refresh access token using the refresh token
export const refreshToken = CatchAsync(async (req: Request, res: Response) => {
  const refreshToken = req.refreshToken;
  const userId = req.user.userId;

  const { accessToken } = await refreshTokensService(userId, refreshToken);

  sendResponse(res, StatusCodes.OK, "Access token refreshed", {
    accessToken,
  });
});