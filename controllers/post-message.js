var express=require("express");
var connection = require('./../config');

module.exports.postmessage=function(req,res){
  
  connection.query("SELECT * FROM users", function(error, results, fields) {
    if(error) return console.log(error);
    res.redirect("./../", {
      users: data
    });
  });
}
