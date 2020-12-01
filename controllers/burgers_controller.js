var express = require('express');
var router = express.Router();

//importing the mode burgers.js to use datbase
var burger = require("../models/burger.js")

//creating all routes with logic 
router.get("/", function(req , res){
    burger.all(function(data){
        var allBurgers = {
            burgers: data
        }
        console.log(allBurgers);
        res.render("index", allBurgers);
    });
});

router.post("/api/burger", function(req, res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.json({id: result.insertId});
    });
});

router.put("/api/burger", function(req, res){
    
    burger.update(req.body.id, function(result){

        res.json({id: result.insertId});
        console.log("ID: ", result.insertId);        
    })
})

//exporting for server.js
module.exports = router;