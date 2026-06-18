import { StatusCodes } from "http-status-codes";
import {
  createUserService,
  getUserService,
  loginUserService,
  logoutService,
  refreshTokenService,
} from "../services/user.service.js";
import sendResponse from "../utils/ApiResponse.js";
import CatchAsync from "../utils/CatchAsync.js";
import ApiError from "../utils/ApiError.js";

// Controller to create a new user
export const registerUser = CatchAsync(async (req, res) => {
  const { name, email, password } = req.body;

  const { user, accessToken, refreshToken } = await createUserService({
    name,
    email,
    password,
  });

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
  const { accessToken } = await refreshTokenService(
    req.user.userid,
    req.refreshToken,
  );

  sendResponse(res, StatusCodes.OK, "Access token refreshed successfully", {
    accessToken,
  });
});

// Controller to logout user
export const logoutUser = CatchAsync(async (req, res) => {
  await logoutService(req.user.userid);

  sendResponse(res, StatusCodes.OK, "Logout successful");
});
