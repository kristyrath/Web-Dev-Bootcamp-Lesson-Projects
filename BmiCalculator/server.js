const express = require("express");
const bodyParser = require("body-parser");
//app: returned object from express
const app = express();
// urlencoded: used for html
// extended: allows post nested objects
app.use(bodyParser.urlencoded({extended: true}));

// when app gets page, send the following
app.get("/", function(req, res) {
  //
  res.sendFile(__dirname + "/index.html");

});
// req: object containing info on the request
// res: respond back to the HTTP request
app.post("/", function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is" + result);
})


app.get("/bmicalculator", function(req,res) {
  res.sendFile(__dirname + "/calculator.html");
});
app.post("/bmicalculator", function(req,res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your BMI is " + bmi);
});

// listen to port 300, then run callback funct
 app.listen(3000, function() {
  console.log("Server started on port 3000");
});
