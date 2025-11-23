import { createUserService, getUserService, loginUserService } from "../services/user.service.js";
import sendResponse from "../utils/ApiResponse.js";
import catchAsync from "../utils/catchAsync.js";

// Controller to create a new user
export const createUser = catchAsync(async (req, res, next) => {
    const { name, email, password } = req.body;

    // Create a new user
    const user = await createUserService({ name, email, password });

    // Send response
    sendResponse(res, 201, "User created successfully", { user });
});

// Controller to login user
export const loginUser = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    //   Login user
    const { user, token } = await loginUserService({ email, password });

    // Send response
    sendResponse(res, 200, "Login successful", { user, token });
});

// Controller to get user by logged in User ID
export const getUser = catchAsync(async (req, res, next) => {
    const userId = req.user.userid;

    const user = await getUserService(userId);
    if (!user) return next(new ApiError(404, "User not found"));

    sendResponse(res, 200, "User retrieved successfully", { user });
});