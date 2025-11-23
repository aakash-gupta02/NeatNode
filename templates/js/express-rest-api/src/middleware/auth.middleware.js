import { verifyAccessToken } from "../utils/Token.js";


// Middleware to protect routes
export const protect = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];

    // Check for token
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Verify token
    const decoded = verifyAccessToken(token);

    // Check if token is valid
    if (!decoded) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Attach token
    req.user = decoded;
    next();
};

// Middleware to restrict access based on user roles
export const restrictTo = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    };
};


