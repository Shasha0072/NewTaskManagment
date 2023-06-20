const express = require("express");

const app = express();

const todoRouter = require("./routes/todoRouter");
const userRouter = require("./routes/userRouter");

app.use("/api/todo", todoRouter);
app.use("/api/user", userRouter);

module.exports = app;
