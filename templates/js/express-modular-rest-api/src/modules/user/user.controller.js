import { StatusCodes } from "http-status-codes";
import CatchAsync from "../../core/utils/CatchAsync.js";
import sendResponse from "../../core/utils/ApiResponse.js";
import {
  createUserService,
  getUserService,
  loginUserService,
  logoutService,
  refreshTokenService,
} from "./user.service.js";
import ApiError from "../../core/utils/ApiError.js";
import { setCookie } from "../../core/utils/Token.js";

// Controller to create a new user
export const registerUser = CatchAsync(async (req, res) => {
  const { name, email, password } = req.body;

  const { user, accessToken, refreshToken } = await createUserService({
    name,
    email,
    password,
  });

  setCookie(res, "accessToken", accessToken);
  setCookie(res, "refreshToken", refreshToken);

  sendResponse(res, StatusCodes.CREATED, "User created successfully", {
    user,
    accessToken,
    refreshToken,
  });
});

// Controller to login user
export const loginUser = CatchAsync(async (req, res) => {
  const { email, password } = req.body;

  const { user, accessToken, refreshToken } = await loginUserService({
    email,
    password,
  });

  setCookie(res, "accessToken", accessToken);
  setCookie(res, "refreshToken", refreshToken);

  sendResponse(res, StatusCodes.OK, "Login successful", {
    user,
    accessToken,
    refreshToken,
  });
});

// Controller to get user by logged in User ID
export const getUser = CatchAsync(async (req, res, next) => {
  const userId = req.user.userid;

  const user = await getUserService(userId);
  if (!user) return next(new ApiError(StatusCodes.NOT_FOUND, "User not found"));

  sendResponse(res, StatusCodes.OK, "User retrieved successfully", { user });
});

// Controller to refresh access token
export const refreshToken = CatchAsync(async (req, res) => {
  const refreshToken = req.refreshToken;
  const userId = req.user.userid;

  const { accessToken } = await refreshTokenService(userId, refreshToken);

  // Set cookie
  setCookie(res, "token", accessToken);

  sendResponse(res, StatusCodes.OK, "Access token refreshed successfully", {
    accessToken,
  });
});

// Controller to logout user
export const logoutUser = CatchAsync(async (req, res) => {
  const userId = req.user.userid;

  await logoutService(userId);

  // Clear the cookie
  res.clearCookie("token");

  sendResponse(res, StatusCodes.OK, "Logout successful");
});
