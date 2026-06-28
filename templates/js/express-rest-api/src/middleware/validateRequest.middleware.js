import { StatusCodes } from "http-status-codes";

const validatePart = (part, input) => (req, res, next) => {
  const { error, value } = input.validate(req[part], {
    abortEarly: false,
  });

  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      errors: error.details.map((err) => err.message),
    });
  }

  // SAFE assignment rules
  if (part === "query") {
    Object.assign(req.query, value);
  } else {
    req[part] = value;
  }


  next();
};

export const validateBody = (input) => validatePart("body", input);
export const validateParams = (input) => validatePart("params", input);
export const validateQuery = (input) => validatePart("query", input);
