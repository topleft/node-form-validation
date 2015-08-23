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

// post route recieving puppy info
router.post("/submit", function(req, res){
  var name = req.body.name;
  var id = req.body.id;
  var formAlert = ute.confirmComplete(name, id);
  var alert = ute.checkForDuplicate(id, name, puppies, res);

  if (formAlert){
    res.render("form", {alert: formAlert});
  }
  else if (alert){
    console.log("working")
    res.render("form", {puppies: puppies, alert: alert});
  }
  else{
    puppies.push({name: name, id: id})
    console.log(puppies);
    res.render("puppies", {puppies: puppies, success: "'"+name+"'"+" successfully added to the system"});
  }
});

// function confirmComplete(name, id){
//   if (name === "" && id === ""){
//     return "A name must be provided.\nAn id must be provided";
//   }
//   else if (name === ""){
//     return "A name must be provided.";
//   }
//   else if (id === ""){
//     return "An ID must be provided.";
//   }
// };

// function checkForDuplicate(currentId, currentName, arr, res){
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]["id"] === currentId && arr[i]["name"] === currentName){
//       var alert = "Your pup is already in the system.";
//       // res.render("puppies", {alert: alert, puppies: puppies});
//       return alert;
//     }
//     else if (arr[i]["id"] === currentId){
//       var alert = "'"+currentId+"'"+" is taken, please choose another ID.";
//       // res.render("puppies", {alert: alert, puppies: puppies});
//       return alert;
//     }
//     else
//       return false;
//   };
// };



module.exports = router;
