import { config } from "../config/env.config.js";

/**
 * @typedef {import("express").CookieOptions} CookieOptions
 */

/**
 * Convert JWT expiresIn format to milliseconds
 * @param {string} expiresIn
 * @returns {number}
 */
export const expiresInToMs = (expiresIn) => {
  if (/^\d+$/.test(expiresIn)) {
    return Number(expiresIn) * 1000;
  }

  const match = expiresIn.match(/^(\d+)([smhdw])$/i);

  if (!match) {
    return 24 * 60 * 60 * 1000;
  }

  const value = Number(match[1]);
  const unit = match[2].toLowerCase();

  const unitToMs = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    w: 7 * 24 * 60 * 60 * 1000,
  };

  return value * unitToMs[unit];
};

/**
 * @param {import("express").Response} res
 * @param {string} name
 * @param {string} value
 * @param {CookieOptions} [options]
 */
export const setCookie = (res, name, value, options = {}) => {
  const defaultOptions = {
    httpOnly: true,
    secure: config.nodeEnv === "production",
    sameSite: config.nodeEnv === "production" ? "none" : "lax",
  };

  res.cookie(name, value, {
    ...defaultOptions,
    ...options,
  });
};

/**
 * @param {import("express").Response} res
 * @param {string} name
 * @param {CookieOptions} [options]
 */
export const clearCookie = (res, name, options = {}) => {
  const defaultOptions = {
    httpOnly: true,
    secure: config.nodeEnv === "production",
    sameSite: config.nodeEnv === "production" ? "none" : "lax",
  };

  res.clearCookie(name, {
    ...defaultOptions,
    ...options,
  });
};
