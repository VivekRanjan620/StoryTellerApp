const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    // 1. Authorization header get karo
    const authHeader = req.headers.authorization;

    // 2. Check token exists or not
    if (!authHeader) {
      return res.status(401).json({
        message: "Access denied. Token not provided",
      });
    }

    // 3. Get token from "Bearer TOKEN"
    const token = authHeader.split(" ")[1];

    // 4. Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // 5. User information request me add karo
    req.user = decoded;

    // 6. Go to next function
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = protect;