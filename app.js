const express = require("express");
const globalErrorHandler = require("./controller/errorController");

const app = express();

app.use(
  express.json({
    limit: "10kb",
  })
);

const todoRouter = require("./routes/todoRouter");
const userRouter = require("./routes/userRouter");

app.use("/api/todo", todoRouter);
app.use("/api/user", userRouter);

app.use(globalErrorHandler);

module.exports = app;
