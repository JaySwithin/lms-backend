const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401).json({ error: "Unauthorized Request" });;
  const token = authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401).json({ error: "Unauthorized Request" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return res.sendStatus(403).json({ error: "Invalid credentials" });
    req.user = user;
  });
  next();
};

module.exports = { verifyJWT };
