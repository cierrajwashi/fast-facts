const express = require("express");
const Statement = require("../models/statement")
const router = express.Router();

router.post("/statement", (req, res) => {
  Statement.create(req.body)
    .then((statement) => res.send(statement))
    .catch((err) => console.log(err));
});

router.get('/statements', (req, res) => {
    Statement.find({})
    .then(statement => res.json(statement))
    .catch(err => console.log(err))
})

router.delete("/statements", (req, res) => {
  Statement.remove()
    .then((statement) => res.json(statement))
    .catch((err) => console.log(err));
});


module.exports = router;
