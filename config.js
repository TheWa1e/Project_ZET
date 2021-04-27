var mysql      = require('mysql2');
var connection = mysql.createConnection({
	host     : 'us-cdbr-east-03.cleardb.com',
	user     : 'bc4173d3a61834',
	password : 'b7fcf959',
	database : 'heroku_1a9fbfc3df24186'
});
connection.connect(function(err){
	if(!err){
		console.log("Database is connected");
	}else{
		console.log("Error while connecting with database");
	}
});
module.exports = connection; 
