const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

// bmi calculator
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  const weight = +req.body.weight;
  const height = +req.body.height;
  const bmi = 703 * (weight / (height * height));
  res.send("Your BMI is " + bmi);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
