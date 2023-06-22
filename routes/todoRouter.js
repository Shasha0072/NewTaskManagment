const express = require("express");

const todoController = require("../controller/todoController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, todoController.getAllTodo)
  .post(authController.protect, todoController.createTodo);

router
  .route("/:id")
  .delete(todoController.deleteTodo)
  .get(todoController.getTodo)
  .patch(todoController.updateTodo);
module.exports = router;
