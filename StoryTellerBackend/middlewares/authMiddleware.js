const jwt = require("jsonwebtoken");
const { errorResponse } = require("../utils/response");

const protect = (req, res, next) => {
  try {
    // 1. Authorization header get karo
    const authHeader = req.headers.authorization;

    // 2. Check token exists or not
    if (!authHeader) {
      return errorResponse(res, 401, "Access denied. Token not provided");
    }

    // 3. Get token from "Bearer TOKEN"
    const token = authHeader.split(" ")[1];

    // 4. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5. User information request me add karo
    req.user = decoded;

    // 6. Go to next function
    next();
  } catch (error) {
    return errorResponse(res, 401, "Invalid or expired token");
  }
};

module.exports = protect;
