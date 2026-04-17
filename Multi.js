const jwt = require('jsonwebtoken');

const mfaMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const otp = req.headers['x-otp'];

    if (!token || !otp) {
      return res.status(401).json({ message: "Token or OTP missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    // Example OTP validation (replace with DB/Redis check)
    if (otp !== "123456") {
      return res.status(403).json({ message: "Invalid OTP" });
    }

    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = mfaMiddleware;