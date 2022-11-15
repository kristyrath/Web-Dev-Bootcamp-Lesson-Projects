// SERVER STARTING CODE

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

// creates new express application
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});


// declare model
const articleSchema = {
  title: String,
  content: String
}

const Article = mongoose.model("Article", articleSchema);

// REQUEST TARGETTING ALL ARTICLES
// GET, DELETE, POST
app.route("/articles")
.get(function(req,res) {
  Article.find({}, function(err, foundArticles) {
    if (!err) {
      res.send(foundArticles);
    }
    else {
       res.send(err);
    }
  })
})
.post(function(req,res) {
  const newArticle = new Article ({
    title: req.body.title,
    content: req.body.content
  });
  newArticle.save((err) => {
    if (!err) {
      res.send("saved successfully!");
    }
    else {
      res.send(err);
    }
  });
})
.delete(app.delete("/articles", function(req,res) {
  Article.deleteMany(function(err) {
    if (err) {
      res.send(err);
    }
    else {
      res.send("successfully deleted all articles");
    }
  })
}));


// REQUEST TARGETTING A SINGLE ARTICLE
app.route("/articles/:articleTitle")
.get(function(req,res) {
  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle) {
    if (!err) {
      if (foundArticle) {
        res.send(foundArticle);
      }
      else {
        res.send("No articles matching that title was found.");
      }
    }
    else {
      res.send(err);
    }
  })
})
// UPDATES WHOLE ARTICLE
// overwrite: update entire
.put(function(req, res) {
  // filter, updated content
  Article.replaceOne({title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
     function(err) {
       console.log("req.params: " + req.params.articleTitle);
       console.log("req.body: " + req.body.content);
      if (!err) {
        res.send("Updated!");
      }
    }
  )
})
// UPDATES ARTICLE FIELD
// $set replaces the value of a field with a specified value
// if field does not exist: add new
// if field exist: update only that one
.patch(function(req, res) {
  Article.replaceOne({title: req.params.article},
  {$set: req.body},function(err) {
        if (!err) {
          res.send("Patched!");
    }
  })
}) 
.delete(function(req, res) {
  Article.deleteOne({title: req.params.article}
    ,function(err) {
        if (!err) {
          res.send("Deleted one!");
    }
  })
});
// create a new route
app.listen(3000, () => console.log("Server started on port 3000"));
