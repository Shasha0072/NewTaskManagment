exports.signup = async (req, res, next) => {
  const user = { name: "Shashwat" };
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

exports.login = async (req, res, next) => {
  const user = { name: "Shashwat Adhau" };
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};
