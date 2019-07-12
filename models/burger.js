var orm = require("../config/orm");

var burger = {
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			console.log("create:"
			+ res)
			cb(res);
		});
	},
	update: function(id, cb) {
		orm.update({id, devoured: 1},
			cb
		);
	},
	delete: function(condition, cb) {
		orm.delete("burgers", condition, function(res) {
		  cb(res);
		});
	  }
};

module.exports = burger;