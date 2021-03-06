var express = require('express');
var router = express.Router();
var puppies = [];
var people = [];
var ute = require("../utility.js")

// puppies home page with choices, see puppies, create puppies
router.get('/', function(req, res, next) {
  res.render('enter', { title: 'Add Puppies or People' });
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

router.get("/new-person", function(req, res){
  res.render("person-form");
});

router.post("/submit-person", function(req, res){
  var name = req.body.name;
  var id = req.body.id;
  var formAlert = ute.confirmComplete(name, id);
  var dupAlert = ute.checkForDuplicate(id, name, people);

  if (formAlert){
    res.render("person-form", {alert: formAlert});
  }
  else if (dupAlert){
    res.render("person-form", {people: people, alert: dupAlert});
  }
  else{
    people.push({name: name, id: id})
    res.render("people", {people: people, success: "'"+name+"'"+" successfully added to the system"});
  }

});


module.exports = router;
