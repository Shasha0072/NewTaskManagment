const express = require("express");
const authController = require("../controller/authController");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.route("/").get(userController.getAllUser);

router.get("/tasks", authController.protect, userController.getAllTaskForUser);
module.exports = router;
