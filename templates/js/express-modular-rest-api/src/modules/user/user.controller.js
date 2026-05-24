import { StatusCodes } from "http-status-codes";
import CatchAsync from "../../core/utils/CatchAsync.js";
import sendResponse from "../../core/utils/ApiResponse.js";
import { createUserService, getUserService, loginUserService } from "./user.service.js";
import ApiError from "../../core/utils/ApiError.js";
import { setCookie } from "../../core/utils/Token.js";

// Controller to create a new user
export const registerUser = CatchAsync(async (req, res) => {
  const { name, email, password } = req.body;

  // Create a new user
  const user = await createUserService({ name, email, password });

  // Send response
  sendResponse(res, StatusCodes.CREATED, "User created successfully", { user });
});

// Controller to login user
export const loginUser = CatchAsync(async (req, res) => {
  const { email, password } = req.body;

  //   Login user
  const { user, token } = await loginUserService({ email, password });

  // Set cookie
  setCookie(res, "token", token);

  // Send response
  sendResponse(res, StatusCodes.OK, "Login successful", { user, token });
});

// Controller to get user by logged in User ID
export const getUser = CatchAsync(async (req, res, next) => {
  const userId = req.user.userid;

  const user = await getUserService(userId);
  if (!user) return next(new ApiError(StatusCodes.NOT_FOUND, "User not found"));

  sendResponse(res, StatusCodes.OK, "User retrieved successfully", { user });
});
