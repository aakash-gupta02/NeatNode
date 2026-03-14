import { StatusCodes } from "http-status-codes";

import ApiError from "../../utils/ApiError.js";
import { createAccessToken } from "../../utils/Token.js";
import { User } from "../user/user.model.js";
import type { LoginInput, RegisterInput } from "./auth.validation.js";

type SafeUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

const sanitizeUser = (user: {
  _id: { toString: () => string };
  name: string;
  email: string;
  role: string;
}): SafeUser => ({
  id: user._id.toString(),
  name: user.name,
  email: user.email,
  role: user.role,
});

export const registerService = async (payload: RegisterInput) => {
  const existing = await User.findOne({ email: payload.email }).lean();
  if (existing) {
    throw new ApiError(StatusCodes.CONFLICT, "User already exists");
  }

  const user = await User.create(payload);

  const token = createAccessToken({
    userId: user._id.toString(),
    email: user.email,
    role: user.role,
  });

  return { token, user: sanitizeUser(user) };
};

export const loginService = async (payload: LoginInput) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid credentials");
  }

  const isValid = await user.comparePassword(payload.password);
  if (!isValid) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid credentials");
  }

  const token = createAccessToken({
    userId: user._id.toString(),
    email: user.email,
    role: user.role,
  });

  return { token, user: sanitizeUser(user) };
};

export const meService = async (userId: string) => {
  const user = await User.findById(userId).select("name email role").lean();
  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
  }
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
  };
};
