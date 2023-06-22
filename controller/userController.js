const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const Todo = require("../models/todoModel");

exports.getAllUser = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
});

exports.getAllTaskForUser = catchAsync(async (req, res, next) => {
  const id = req.user._id;

  const todos = await Todo.find({ userId: id });
  res.status(200).json({
    status: "success",
    data: {
      todos,
    },
  });
});
