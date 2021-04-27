var mysql      = require('mysql2');
var connection = mysql.createConnection({
	host     : 'us-cdbr-east-03.cleardb.com',
	user     : 'b6f5b64d7d2d5f',
	password : '4a242ef1',
	database : 'heroku_e3915428adced65'
});
connection.connect(function(err){
	if(!err){
		console.log("Database is connected");
	}else{
		console.log("Error while connecting with database");
	}
});
module.exports = connection; 
