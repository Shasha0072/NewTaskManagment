const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    email: req.body.email,
  });
  newUser.password = undefined;
  newUser.passwordConfirm = undefined;
  res.status(200).json({
    status: "success",
    data: {
      newUser,
    },
  });
});

exports.login = async (req, res, next) => {
  const user = { name: "Shashwat Adhau" };
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};
