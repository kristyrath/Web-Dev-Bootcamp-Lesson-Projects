const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
let day = date.getDate(); // saving module output
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

// HOME ROUTE
app.get('/', function(req, res) {
  res.render('list', {
    listTitle: day,
    newListItems: items
  });
});
app.post("/", function(req, res) {
  var item = req.body.newItem;
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }
});

// WORK ROUTE
app.get("/work", function(req,res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

// ABOUT ROUTE
app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log('server started on port 3000');
});
