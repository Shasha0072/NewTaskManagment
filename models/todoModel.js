const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Todo Must have a title"] },
    description: { type: String },
    dueDate: { type: Date, default: null },
    startDate: { type: Date, default: Date.now() },
    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Urgent"],
      default: "Low",
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema, "tasks");

module.exports = Todo;
