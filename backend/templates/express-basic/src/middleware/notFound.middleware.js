import { errorResponse } from "../utils/responseHandler.js";

export default (req, res) => {
errorResponse(res, `Route ${req.originalUrl} not found`, 404);
};
