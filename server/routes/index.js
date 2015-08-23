var express = require('express');
var router = express.Router();


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
  console.log(name);
  res.render("puppies", {name: name, id: id});
});

// get route show puppies info in a table
// router.get("/puppies", function(req, res){
//   res.render("puppies");
// })


module.exports = router;
