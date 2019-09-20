// Import the ORM to create functions that will interact with the database.
const path = require("path");
var orm = require(path.join(__dirname + "/../config/orm.js"));

var burger = {
    getBurgers: function(cb){
        orm.selectAll("burgers", function(response){ 
            cb(response);
        });
    },
    
    newBurger: function(name, cb){
        orm.insertOne("burgers", "name", name, function(response){
            cb(response);
        });
    },
    
    devour: function(burgerId, cb){
        orm.updateOne("burgers", "devoured", true, "id", burgerId, function(response){ 
            cb(response);
        });
    }
}

module.exports = burger;