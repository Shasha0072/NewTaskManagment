const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });
//Connect to database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {})
  .then((con) => {
    console.log("Connected to Database");
  })
  .catch((err) => console.log(err));

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
