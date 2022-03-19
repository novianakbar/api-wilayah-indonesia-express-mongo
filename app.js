const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models/");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Cannot connect to Database", err);
    process.exit();
  });

require("./app/routes/region.routes")(app);

//Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Indonesia Region APIs" });
});

app.listen(
  process.env.PORT,
  console.log("Listening on port ", process.env.PORT)
);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});
