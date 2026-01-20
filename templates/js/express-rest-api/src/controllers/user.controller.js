import { StatusCodes } from "http-status-codes";
import { createUserService, getUserService, loginUserService } from "../services/user.service.js";
import sendResponse from "../utils/ApiResponse.js";
import CatchAsync from "../utils/CatchAsync.js";

// Controller to create a new user
export const registerUser = CatchAsync(async (req, res, next) => {
    const { name, email, password } = req.body;

    // Create a new user
    const user = await createUserService({ name, email, password });

    // Send response
    sendResponse(res, StatusCodes.CREATED, "User created successfully", { user });
});

// Controller to login user
export const loginUser = CatchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    //   Login user
    const { user, token } = await loginUserService({ email, password });

    // Send response
    sendResponse(res, StatusCodes.OK, "Login successful", { user, token });
});

// Controller to get user by logged in User ID
export const getUser = CatchAsync(async (req, res, next) => {
    const userId = req.user.userid;

    const user = await getUserService(userId);
    if (!user) return next(new ApiError(404, "User not found"));

    sendResponse(res, StatusCodes.OK, "User retrieved successfully", { user });
});