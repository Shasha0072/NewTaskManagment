const Todo = require("../models/todoModel");
const catchAsync = require("../utils/catchAsync");

exports.createTodo = catchAsync(async (req, res, next) => {
  const todo = req.body;
  const userId = req.user._id;
  todo.userId = userId;
  const newTodo = await Todo.create(todo);
  res.status(200).json({
    status: "success",
    data: {
      newTodo,
    },
  });
});

exports.getAllTodo = catchAsync(async (req, res, next) => {
  const todos = await Todo.find();
  res.status(200).json({
    status: "success",
    results: todos.length,
    data: {
      todos,
    },
  });
});

exports.getTodo = async (req, res, next) => {
  const todo = ["saaaaaa"];
  res.status(200).json({
    status: "success",
    data: {
      todo,
    },
  });
};

exports.updateTodo = (req, res, next) => {
  const { id } = req.body;
  // get todo document from the database
  // edit the todo and save
  res.status(200).json({
    status: "success",
    message: "Todo With ID edited successfully",
  });
};

exports.deleteTodo = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  // delete the todo
  const todo = await Todo.findByIdAndDelete(id);
  res.status(200).json({
    status: "success",
    message: "Todo With ID deleted successfully",
  });
});
