const express = require("express");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();
const authController = require("../controllers/authController");
// const userProfile=require('../controllers/userProfile');
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
module.exports = router;
