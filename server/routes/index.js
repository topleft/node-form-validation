var express = require('express');
var router = express.Router();
var puppies = [];

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
  console.log(puppies);
  var alert = checkForDuplicate(id, name, puppies, res);
  if (alert){
    res.render("puppies", {puppies: puppies, alert: alert, color: "red"});
  }
  else{
    puppies.push({name: name, id: id})
    console.log(puppies);
    res.render("puppies", {puppies: puppies, success: name+" added to the system"});
  }
});

// function checkForDuplicate(currentId, currentName, arr){
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]["id"] === currentId && arr[i]["name"] === currentName){
//       var alert = "That pup is already in the system.";;
//       return alert;
//     }
//     else if (arr[i]["id"] === currentId){
//       var alert = currentId+" is taken, please choose another.";
//       return alert;
//     }
//   };
// };

// need to figure out how to render form again.

function checkForDuplicate(currentId, currentName, arr, res){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]["id"] === currentId && arr[i]["name"] === currentName){
      var alert = "That pup is already in the system.";
      // res.render("puppies", {alert: alert, puppies: puppies});
      return alert;
    }
    else if (arr[i]["id"] === currentId){
      var alert = currentId+" is taken, please choose another.";
      // res.render("puppies", {alert: alert, puppies: puppies});
      return alert;
    }
    else
      return false;
  };
};


module.exports = router;
