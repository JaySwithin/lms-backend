const express = require("express");
const { register, getAllCustomers, getCustomerLoans } = require("../contollers/customers");
const router = express.Router();

router.route("/")
  .get(getAllCustomers)
  .post(register);

router.route("/:customerId/loans")
  .get(getCustomerLoans)

module.exports = router;
