const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter user name."],
      unique: [true, "username must be unique"],
    },
    email: {
      type: String,
      required: [true, "Please enter user name."],
      unique: [true, "username must be unique"],
      validate: {
        validator: function (v) {
          const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          return re.test(v);
        },
        message: "Enter a valid email.",
      },
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please enter password"],
      validate: {
        validator: function (el) {
          return this.password === el;
        },
        message: "Password don't match.",
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
