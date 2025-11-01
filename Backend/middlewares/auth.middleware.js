import jwt from "jsonwebtoken";
import { User } from "../model/User.js";

/**
 * @desc    Middleware to verify JWT from cookies or headers
 * @access  Protected routes only
 */
export const verifyJWT = async (req, res, next) => {
  try {
    // 1️⃣ Extract token (prefer cookies, fallback to Authorization header)
    const token =
      req.cookies?.token ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    // 2️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.status(401).json({
        success: false,
        message: "Invalid token.",
      });
    }

    // 3️⃣ Fetch user to ensure still exists (and optionally filter fields)
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found. Token invalid.",
      });
    }

    // 4️⃣ Attach user info to request object
    req.user = user;

    // 5️⃣ Proceed to next middleware/route
    next();
  } catch (error) {
    console.error("Error verifying JWT:", error);

    return res.status(401).json({
      success: false,
      message: "Unauthorized or expired token.",
      error: error.message,
    });
  }
};
