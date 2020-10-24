const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(morgan);
app.get("/", (req, res, next) => {
  console.log("this was ran");
  res.render("/public/index.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is runnign on port 3000! 🚀");
});
