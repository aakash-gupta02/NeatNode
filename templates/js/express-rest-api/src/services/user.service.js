import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import { generateToken } from "../utils/Token.js";
import { StatusCodes } from "http-status-codes";

export const createUserService = async ({ name, email, password }) => {
  // Check if user exists
  const existing = await User.findOne({ email });
  if (existing) throw new ApiError(StatusCodes.CONFLICT, "User already exists");

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const userObj = user.toObject(); // Convert Mongoose document to plain object
  delete userObj.password; // Remove password field
  delete userObj.__v;
  delete userObj.createdAt;
  delete userObj.updatedAt;

  return userObj;
};

export const loginUserService = async ({ email, password }) => {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) throw new ApiError(StatusCodes.NOT_FOUND, "Invalid Email or password");

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid email or Password"); // notice the capitals, can be used for testing else keep it consistent
    // Generate JWT token
    const token = generateToken({userid: user._id, role: user.role}, '7h');

    const userObj = user.toObject(); // Convert Mongoose document to plain object
    delete userObj.password; // Remove password field
    delete userObj.__v;
    delete userObj.createdAt;
    delete userObj.updatedAt;

    return { user: userObj, token };
};

export const getUserService = async (userId) => {
  return await User.findById(userId).select("-password -__v -createdAt -updatedAt");
}