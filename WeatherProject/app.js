const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=341ba912120d15a29767455cf9bf102b";
  https.get(url, function(response) {
    console.log("I am here0");

    console.log(response.statusCode);
    console.log("I am here1");

    // listen for data
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);

    });
  });
  res.send("server is up and running.");
});
app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
