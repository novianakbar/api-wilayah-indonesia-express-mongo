const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const IndonesiaProvince = require("./schema");
const dotenv = require("dotenv");

dotenv.config();

const mongoURL = process.env.DB_URL;
console.log(mongoURL);
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error:")
);
mongoose.connection.on("open", () => {
  console.log("Database connected", mongoURL);
});

mongoose.connection.on("open", () => init());

const init = async () => {
  const data = JSON.parse(fs.readFileSync("./indonesia.json").toString());
  console.log("Initializing something dramatically !");
  try {
    await IndonesiaProvince.insertMany(data);
  } catch (e) {
    console.error(e);
  }
  console.log("WHOOPS that's all folks!");
  mongoose.connection.close();
};
