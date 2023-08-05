const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

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
      res.write("<p>Weather Image :::</p>");
      res.write("<img src=" + icon + " alt='weather image' >");
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
