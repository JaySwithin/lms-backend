const express = require("express");
const { addLoan, getAllLoans } = require("../contollers/loans");
const router = express.Router();

router.route("/")
  .post(addLoan)
  .get(getAllLoans)

module.exports = router;