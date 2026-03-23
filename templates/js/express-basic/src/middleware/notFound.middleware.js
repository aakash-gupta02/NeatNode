import { errorResponse } from "../utils/responseHandler.js";

export default (req, res) => {
  errorResponse(res, 404, `Route ${req.originalUrl} not found`);
};
