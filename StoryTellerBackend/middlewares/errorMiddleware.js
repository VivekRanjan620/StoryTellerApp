const { errorResponse } = require("../utils/response");

const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  return errorResponse(
    res,
    err.statusCode || 500,
    err.message || "Internal Server Error"
  );
};

module.exports = errorHandler;