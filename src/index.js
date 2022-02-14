const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));

app.get("/", (req, res) => {});

// lisening to port
app.listen(port, () => {
  console.log("connected to port:", port);
});
