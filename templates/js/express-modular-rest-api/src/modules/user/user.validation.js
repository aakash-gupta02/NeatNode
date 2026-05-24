import joi from "joi";

// Schema for creating a new user
export const createUserSchema = joi.object({
    name: joi.string().min(3).max(30).required().messages({
        'string.min': 'Name should have a minimum length of 3',
        'string.max': 'Name should have a maximum length of 30',
        'any.required': 'Name is required'
    }),
    email: joi.string().email().required().messages({
        'string.email': 'Email must be a valid email',
        'any.required': 'Email is required'
    }),
    password: joi.string().min(6).required().messages({
        'string.min': 'Password should have a minimum length of 6',
        'any.required': 'Password is required'
    }),
});

// Schema for updating an existing user
export const updateUserSchema = joi.object({
    name: joi.string().min(3).max(30).messages({
        'string.min': 'Name should have a minimum length of 3',
        'string.max': 'Name should have a maximum length of 30',
    }),
    email: joi.string().email().messages({
        'string.email': 'Email must be a valid email',
    }),
    password: joi.string().min(6).messages({
        'string.min': 'Password should have a minimum length of 6',
    }),
});

// Schema for user login
export const loginSchema = joi.object({
    email: joi.string().email().required().messages({
        'string.email': 'Email must be a valid email',
        'any.required': 'Email is required'
    }),
    password: joi.string().required().messages({
        'any.required': 'Password is required'
    }),
});
