const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { successResponse, errorResponse } = require("../utils/response");

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // 2. Check if email already exists
    const [existingUser] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email],
    );

    if (existingUser.length > 0) {
      return errorResponse(res, 409, "Email already registered");
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Save user in database
    const [result] = await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword],
    );

    // 5. Success response
    return successResponse(res, 201, "User registered successfully", {
      user: {
        id: result.insertId,
        name,
        email,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 2. Find user
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    // 3. User not found
    if (users.length === 0) {
      return errorResponse(res, 404, "User not found");
    }

    const user = users[0];

    // 4. Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return errorResponse(res, 401, "Invalid password");
    }

    // 5. Generate JWT Token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    // 6. Success Response
    return successResponse(res, 200, "Login successful", {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signup,
  login,
};
