const dotenv = require("dotenv");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = process.env.DB_URL;
db.region = require("./indonesia")(mongoose);

module.exports = db;
