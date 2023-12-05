const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { login, register } = require("../api/v1/auth");
const createHttpError = require("http-errors");

const User = require("../models/user");

// Your existing login and register routes
const router = express.Router();
router.post("/login", login);
router.post("/register", register);

// Google login route
router.get(
  "/google-login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google login callback route
router.get(
  "/google-login/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful Google authentication
    // Generate JWT token for the user
    const token = jwt.sign({ sub: req.user._id }, "my_secret", {
      expiresIn: "1d",
    });

    // Redirect or send the token as a response, depending on your frontend implementation
    res.json({
      message:
        "Google login successful, here is your token, please keep it safe",
      token,
      user: req.user,
    });
  }
);

module.exports = router;
