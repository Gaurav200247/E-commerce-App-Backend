const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .set("strictQuery", true)
    .connect(url)
    .then(() => console.log("DB connected..."))
    .catch((error) => console.log("DB connection Failed !!", error));
};

module.exports = connectDB;
