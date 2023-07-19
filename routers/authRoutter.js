const express = require("express");
const authRoutter = express.Router();
const authController = require("../controllers/authController");

authRoutter.post("/register", authController.register);
authRoutter.post("/login", authController.Login);

module.exports = authRoutter;
