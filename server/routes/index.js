var express = require('express');
var router = express.Router();
var puppies = [];
var ute = require("../utility.js")

// puppies home page with choices, see puppies, create puppies
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//  get route for create puppies
router.get("/new", function(req, res){
  res.render("form");
});

// post route recieving and validating puppy info
router.post("/submit", function(req, res){
  var name = req.body.name;
  var id = req.body.id;
  var formAlert = ute.confirmComplete(name, id);
  var dupAlert = ute.checkForDuplicate(id, name, puppies);

  if (formAlert){
    res.render("form", {alert: formAlert});
  }
  else if (dupAlert){
    console.log("working")
    res.render("form", {puppies: puppies, alert: dupAlert});
  }
  else{
    puppies.push({name: name, id: id})
    console.log(puppies);
    res.render("puppies", {puppies: puppies, success: "'"+name+"'"+" successfully added to the system"});
  }
});


module.exports = router;
