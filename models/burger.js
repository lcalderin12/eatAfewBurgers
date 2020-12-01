// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger ={
    all: function(cb){
        orm.all("burgers", function(result){
            cb(result);
        })
    },
    create: function(burger_name, cb){
        orm.create(burger_name, function(result){
            cb(result);
        })
    },
    update: function(devouredId, cb){
        orm.update(devouredId, function(result){
            cb(result);
        })
    }
}

module.exports = burger;