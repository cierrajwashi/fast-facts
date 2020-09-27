const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const StatementRoute = require("./routes/statementRoute");
// ... other imports
const path = require("path");

const app = express();
require("dotenv").config();
const cors = require("cors");

express.json();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use(cors());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("mongodb connected successfully"))
  .catch(() => console.log("err"));

app.use("/", StatementRoute);
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
