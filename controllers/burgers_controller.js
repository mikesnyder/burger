var express = require("express");
var router = express.Router();
var burger = require("../models/burger");
//console.log(burger)
router.get("/", function(req, res) {
	burger.all(function(data) {
		console.log(data)
		var hbsObject = {
			burgers: data
		};

		res.render("index", hbsObject);
	});
});

router.post("/burgers", function(req, res) {
	//  if(req.body.burger_name !== "") {
		burger.create(['burger_name'],[req.body.burger_name.trim()], function(result) {		
			res.redirect("/");
		});
	//  }
});

router.put("/burgers/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burger.update({
	  devoured: 1
	}, condition, function(result) {
	  res.redirect('/');
	});
  });

module.exports = router;