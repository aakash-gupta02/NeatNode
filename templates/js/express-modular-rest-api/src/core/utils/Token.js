import jwt from "jsonwebtoken"
import { config } from "../../config/env.config.js";

// Generate JWT token
export const generateToken = (payload, expiresIn = '1h') => {
    return jwt.sign(payload, config.jwtSecret, { expiresIn });
}

// Verify JWT token
export const verifyAccessToken = (token) => {
    try {
        return jwt.verify(token, config.jwtSecret);
    } catch (error) {
        return null;
    }
};

// Set token in cookie
export const setCookie = (res, name, value, options = {}) => {
    const defaultOptions = {
        httpOnly: true,
        secure: config.nodeEnv === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    };
    res.cookie(name, value, { ...defaultOptions, ...options });
};
