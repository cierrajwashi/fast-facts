const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const StatementRoute = require("./routes/statementRoute");
const app = express();
const cors = require("cors");

express.json();
app.use(bodyParser.json());

app.use(cors());

mongoose
  .connect("mongodb://localhost/statement")
  .then(() => console.log("mongodb connected successfully"))
  .catch(() => console.log("err"));

app.use("/", StatementRoute);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
