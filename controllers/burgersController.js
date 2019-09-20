var express = require("express");

var router = express.Router();
router.use(express.urlencoded({ extended: true}));
router.use(express.json());

// Import the model (burger.js) to use its database functions.
var path = require("path");
var burgerORM = require(path.join(__dirname + "/../models/burger.js"));

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgerORM.getBurgers(function(response){
    res.render("index", {burgers: response})
  })
  });

router.post("/api/burgers", function(req, res) {
  burgerORM.newBurger(req.body.name, function(response){res.redirect("/")
  });
});

router.put("/api/burgers/:id", function(req, res) {
 burgerORM.devour(req.params.id, function(response){
   res.send("");
 })
});

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
