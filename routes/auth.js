const express = require("express");
const router = express.Router();
const jobController = require("../controller/job");
const authController = require("../controller/user");
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/create", jobController.createJobPost);

module.exports = router;
