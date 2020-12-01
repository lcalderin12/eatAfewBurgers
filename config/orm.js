var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    all: function(table, cb){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function(err, result){
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    },
    create: function(value, cb){
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)";
        connection.query(queryString, value, function(err, result){
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    },
    update: function(devouredId, cb){
        var queryString = "UPDATE burgers SET devoured = NOT devoured where id = ?";
        connection.query(queryString, devouredId, function(err, result){
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    }
}

module.exports = orm;
