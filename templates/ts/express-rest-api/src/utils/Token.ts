import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import { env } from "../config/env.js";

type TokenPayload = {
  userId: string;
  email: string;
  role: string;
  type: "access" | "refresh";
};

const parseExpiresIn = (value: string): SignOptions["expiresIn"] => {
  if (/^\d+$/.test(value)) {
    return Number(value);
  }
  return value as SignOptions["expiresIn"];
};

// Create and verify access tokens
export const createAccessToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET as Secret, {
    expiresIn: parseExpiresIn(env.JWT_ACCESS_EXPIRES_IN),
  });
};

export const verifyAccessToken = (token: string): TokenPayload => {
  return jwt.verify(token, env.JWT_ACCESS_SECRET as Secret) as TokenPayload;
};

// Create and verify refresh tokens
export const createRefreshToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET as Secret, {
    expiresIn: parseExpiresIn(env.JWT_REFRESH_EXPIRES_IN),
  });
};

export const verifyRefreshToken = (token: string): TokenPayload => {
  return jwt.verify(token, env.JWT_REFRESH_SECRET as Secret) as TokenPayload;
};
