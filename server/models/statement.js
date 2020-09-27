const mongoose = require("mongoose");

const StatementSchema = new mongoose.Schema({
  statement: String,
  answer: String,
});

module.exports = mongoose.model("Statements", StatementSchema);