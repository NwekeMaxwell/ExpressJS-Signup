const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded());
const port = 3000;

//weather project
// app.get("/", function (req, res) {
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=nigeria&appid=7f33785a1a37694bbd8ab5c4fbbdfa8d";
//   // "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=7f33785a1a37694bbd8ab5c4fbbdfa8d";

//   https.get(url, function (response) {
//     console.log(response.statusCode);
//     // console.log(response.headers);
//     response.on("data", function (data) {
//       const weatherData = JSON.parse(data);
//       // you can also JSON.stringify(object) to covert them to strings
//       // console.log(weatherData);
//       const city = weatherData.name;
//       const temp = weatherData.main.temp;
//       const desc = weatherData.weather[0].description;

//       //to display icon
//       const iconId = weatherData.weather[0].icon;
//       const icon = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

//       res.write("<p>Server is running for the weather project");
//       res.write("<p>The weather in " + city + " is currently " + desc + "</p>");
//       res.write("<h1>The temperature is " + temp + " degree celsius.</h1>");
//       res.write("<img src=" + icon + " alt='weather image' >");
//       res.send();
//     });
//   });
// });
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/getWeather.html");
});

app.post("/", function (req, res) {
  const countryName = req.body.country;
  // console.log(req.body);
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    countryName +
    "&appid=7f33785a1a37694bbd8ab5c4fbbdfa8d";
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const country = weatherData.name;
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const iconId = weatherData.weather[0].icon;
      const icon = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

      res.write(
        "<h1>The weather in " + country + " is currently " + desc + "</h1>"
      );
      res.write("<p>The temperature is " + temp + " degree celsius.</p>");
      res.write("<img src=" + icon + " alt='weather image' >");
      res.send();
    });
  });
});

// bmi calculator
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/", (req, res) => {
//   const num1 = req.body.num1;
//   const num2 = req.body.num2;
//   const sum = +num1 + +num2;
//   res.send("Welldone, the sum is " + sum);
// });

// app.get("/bmicalculator", function (req, res) {
//   res.sendFile(__dirname + "/bmiCalculator.html");
// });
// app.post("/bmicalculator", function (req, res) {
//   const weight = +req.body.weight;
//   const height = +req.body.height;
//   const bmi = 703 * (weight / (height * height));
//   res.send("Your BMI is " + bmi);
// });
// app.get("/", (req, res) => {
//   res.send("<h1>Hello World! Let's go EXPRESS </h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h2>contact me at nwekemaxwell37@gmail.com</h2>");
// });

// app.get("/about", (req, res) => {
//   res.send(
//     "<p>I am a world class frontend web and app developer with vast knowledge of design and development<p>"
//   );
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
