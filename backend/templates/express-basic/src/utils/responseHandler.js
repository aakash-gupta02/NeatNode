export const sendResponse = (res, message, data = {}) => {
  res.status(200).json({ success: true, message, data });
};

export const errorResponse = (res, message, code = 500) => {
  res.status(code).json({ success: false, message });
};
