import { StatusCodes } from "http-status-codes";

import ApiError from "../../utils/ApiError.js";
import { User } from "./user.model.js";
import type { UpdateProfileInput } from "./user.validation.js";

export const getProfileService = async (userId: string) => {
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

export const updateProfileService = async (userId: string, payload: UpdateProfileInput) => {
  const user = await User.findByIdAndUpdate(userId, payload, {
    new: true,
    runValidators: true,
    projection: "name email role",
  }).lean();

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
