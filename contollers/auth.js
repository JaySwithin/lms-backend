const { Admin } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config()

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(401)
        .json({ message: "Username and password are required." });
    }

    const admin = await Admin.findOne({ where: { username } });

    if (admin && admin.password === password) {
      const user = { name: admin.username }
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
      res.json({ accessToken: accessToken });
    } else {
      res.status(401).json({ error: "Authentication failed" });
    }

  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Could not sign you in at this time. Try again later" });
  }
};

module.exports = { login };
