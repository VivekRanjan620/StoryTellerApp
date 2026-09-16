const rateLimit = require("express-rate-limit");

const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes

  limit: 10, // Maximum 10 requests

  message: {
    success: false,
    message: "Too many requests, please try again later",
  },

  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = authRateLimiter;