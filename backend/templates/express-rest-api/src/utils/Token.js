import jwt from "jsonwebtoken"
import { config } from "../config/env.config.js";

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
