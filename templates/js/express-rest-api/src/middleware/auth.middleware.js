import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import { verifyAccessToken } from "../utils/Token.js";


// Middleware to protect routes
export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(
      new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized")
    );
  }

  const token = authHeader.split(" ")[1];

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


