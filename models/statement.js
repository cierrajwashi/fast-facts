const mongoose = require("mongoose");

const StatementSchema = new mongoose.Schema({
    statement: String,
    answer: String
})

const Statement = mongoose.model('Statement', StatementSchema);
module.exports = Statement;
