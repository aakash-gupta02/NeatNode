import bcrypt from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/Token.js";

// Service to create a new user
export const createUserService = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new ApiError(StatusCodes.CONFLICT, "User already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const accessToken = generateAccessToken({
    userid: user._id,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({
    userid: user._id,
    role: user.role,
  });

  const hashedRefreshToken = await bcrypt.hash(refreshToken, salt);
  user.refreshToken = hashedRefreshToken;
  await user.save();

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.__v;
  delete userObj.createdAt;
  delete userObj.updatedAt;

  return { user: userObj, accessToken, refreshToken };
};

// Service to login user
export const loginUserService = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user)
    throw new ApiError(StatusCodes.NOT_FOUND, "Invalid Email or password");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid email or Password");

  const accessToken = generateAccessToken({
    userid: user._id,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({
    userid: user._id,
    role: user.role,
  });

  const salt = await bcrypt.genSalt(10);
  const hashedRefreshToken = await bcrypt.hash(refreshToken, salt);
  user.refreshToken = hashedRefreshToken;
  await user.save();

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.__v;
  delete userObj.createdAt;
  delete userObj.updatedAt;

  return { user: userObj, accessToken, refreshToken };
};

// Service to get user by ID
export const getUserService = async (userId) => {
  return await User.findById(userId)
    .select("-password -__v -createdAt -updatedAt")
    .lean();
};

// Service to refresh access token
export const refreshTokenService = async (userId, refreshToken) => {
  const user = await User.findById(userId).select("+refreshToken");

  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
  }

  const isValidRefreshToken = await bcrypt.compare(
    refreshToken,
    user.refreshToken,
  );

  if (!isValidRefreshToken) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid refresh token");
  }

  const accessToken = generateAccessToken({
    userid: user._id,
    role: user.role,
  });

  return { accessToken };
};

// Service to logout user
export const logoutService = async (userId) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { $unset: { refreshToken: "" } },
    { new: true },
  );

  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
  }
};
