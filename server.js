const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
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

const StatementSchema = new mongoose.Schema({
  statement: String,
  answer: String,
});

const Statements = mongoose.model("Statements", StatementSchema);

app.post("/api/statement", (req, res) => {
  Statements.create(req.body)
    .then((statement) => res.send(statement))
    .catch((err) => console.log(err));
});

app.get("/api/statements", (req, res) => {
  Statements.find({})
    .then((statement) => res.json(statement))
    .catch((err) => console.log(err));
});

app.delete("/api/statements", (req, res) => {
  Statements.remove()
    .then((statement) => res.json(statement))
    .catch((err) => console.log(err));
});

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
