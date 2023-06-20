const express = require("express");
const todoController = require("../controller/todoController");

const router = express.Router();

router
  .route("/")
  .get(todoController.getAllTodo)
  .post(todoController.createTodo);

router
  .route("/:id")
  .delete(todoController.deleteTodo)
  .get(todoController.getTodo)
  .patch(todoController.updateTodo);
module.exports = router;
