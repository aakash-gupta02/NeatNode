import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import { verifyAccessToken } from "../utils/Token.js";


// Middleware to protect routes
export const protect = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    // Check for token
    if (!token || !token.startsWith('Bearer ')) {
        return next(new ApiError(StatusCodes.UNAUTHORIZED, 'Unauthorized'));
    }

    // Verify token
    const decoded = verifyAccessToken(token);

    // Check if token is valid
    if (!decoded) {
        return next(new ApiError(StatusCodes.UNAUTHORIZED, 'Unauthorized'));
    }

    // Attach token
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


