const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

// calculator
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const sum = +num1 + +num2;
  res.send("Welldone, the sum is " + sum);
});

app.get("/contact", (req, res) => {
  res.send("<h2>contact me at nwekemaxwell37@gmail.com</h2>");
});

app.get("/about", (req, res) => {
  res.send(
    "<p>I am a world class fullstack web and app developer with vast knowledge of design and development<p>"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
