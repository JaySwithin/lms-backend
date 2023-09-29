const express = require("express");
const { login } = require("../contollers/auth");
const router = express.Router();

router.route("/").post(login);

module.exports = router;
