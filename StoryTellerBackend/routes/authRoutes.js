const express = require("express");

const { signup, login } = require("../controllers/authController");

const protect = require("../middlewares/authMiddleware");
const authRateLimiter = require("../middlewares/rateLimitMiddleware");

const {
  signupValidation,
  loginValidation,
  validateRequest,
} = require("../middlewares/validationMiddleware");

const router = express.Router();

router.post(
  "/signup",
  authRateLimiter,
  signupValidation,
  validateRequest,
  signup
);

router.post(
  "/login",
  authRateLimiter,
  loginValidation,
  validateRequest,
  login
);

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Welcome to your profile",
    user: req.user,
  });
});

module.exports = router;