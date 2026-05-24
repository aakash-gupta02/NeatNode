import { StatusCodes } from "http-status-codes";

const validatePart = (part, schema) => (req, res, next) => {
  const { error, value } = schema.validate(req[part], {
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

export const validateBody = (schema) => validatePart("body", schema);
export const validateParams = (schema) => validatePart("params", schema);
export const validateQuery = (schema) => validatePart("query", schema);
