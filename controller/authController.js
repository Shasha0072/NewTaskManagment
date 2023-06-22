const User = require("../models/userModel");
const AppError = require("../utils/appError");
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
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new AppError("Provide username and password.", 400));
  }

  const user = await User.findOne({ username: username }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  user.password = undefined;
  user.passwordConfirm = undefined;
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};
