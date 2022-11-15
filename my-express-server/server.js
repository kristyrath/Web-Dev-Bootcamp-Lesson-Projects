const express = require('express');
const app = express();
app.get("/about", function(req, res) {
  res.send("I am a kiwi bird");
});
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
