// users.js

const express = require("express");

const passport = require("passport");
const jwt = require("jsonwebtoken");
const { registerValidator } = require("../../utils/validators");
const { validationResult } = require("express-validator");

// User model import
const User = require("../../models/user");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    console.log(user, "user");

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Validate the password
    const isMatch = await user.isValidPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // // Generate JWT token current working code
    const token = jwt.sign({ sub: user._id }, "my_secret", {
      expiresIn: "1d",
    });

    // Return the token to the client
    res.status(200).json({
      message: "Sign in successful,here is your token please keep it safe",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map((error) => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }

    const { username } = req?.body;
    const doesExist = await User.findOne({ username });
    if (doesExist) {
      return res.status(400).json({ error: "username already exists" });
    }

    const user = new User(req.body);
    console.log(user, "user data");
    await user.save();
    return res.json({
      message: `${user.username} registered successfully, you can now login`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login, register };
