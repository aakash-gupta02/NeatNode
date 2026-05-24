import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import { verifyAccessToken } from "../utils/Token.js";

// Middleware to protect routes
export const protect = (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  // Check for token in cookies or Authorization header
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  } else if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    return next(
      new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized")
    );
  }

  const decoded = verifyAccessToken(token);

  if (!decoded) {
    return next(
      new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized")
    );
  }

  req.user = decoded;
  next();
};


// Middleware to restrict access based on user roles
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ApiError(StatusCodes.FORBIDDEN, 'Forbidden'));
    }
    next();
  };
};


