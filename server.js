const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
//Connect to database

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>
  console.log(`Server Running on PORT ${PORT}`)
);
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION");
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
