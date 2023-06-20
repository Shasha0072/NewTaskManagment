exports.createTodo = async (req, res) => {
  const todoInfo = req.body;
  // add the todo in database
  res.status(200).json({
    status: "success",
  });
};

exports.getAllTodo = async (req, res) => {
  const todos = ["aa", "sas"];
  res.status(200).json({
    status: "success",
    results: todos.length,
    data: {
      todos,
    },
  });
};

exports.getTodo = async (req, res) => {
  const todo = ["saaaaaa"];
  res.status(200).json({
    status: "success",
    data: {
      todo,
    },
  });
};

exports.updateTodo = (req, res) => {
  const { id } = req.body;
  // get todo document from the database
  // edit the todo and save
  res.status(200).json({
    status: "success",
    message: "Todo With ID edited successfully",
  });
};
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  // delete the todo
  res.status(200).json({
    status: "success",
    message: "Todo With ID deleted successfully",
  });
};
