const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { verifyJWT } = require("./middlewares/verifyToken")

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.use("/api/login", require("./routes/auth"))
app.use(verifyJWT)
app.use("/api/customers", require("./routes/customers"))
app.use("/api/loans", require("./routes/loans"))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
