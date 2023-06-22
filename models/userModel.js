const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
      select: false,
      required: [true, "Please enter password"],
      validate: {
        validator: function (el) {
          return this.password === el;
        },
        message: "Password don't match.",
      },
    },
    todo: [
      {
        type: [mongoose.Schema.ObjectId],
        ref: "Todo",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});

userSchema.pre(/^find/, function (next) {
  this.select("-__v");
  next();
});

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: "todo",
  });
  next();
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
