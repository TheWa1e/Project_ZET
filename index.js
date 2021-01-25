var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var sendmessageController=require('./controllers/send-message-controller');
var sendpasswordController=require('./controllers/send-password-controller');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

// устанавливает дейсвующие файлы
app.set("view engine", "ejs");
app.use(express.static('views'));

/*app.get('/', function (req, res) {	
  res.sendFile(__dirname + 'index.html');
});*/

connection.query('SELECT message FROM message', function(error, result, fields){
    app.get("/", function (req, res) {
      res.render("index.ejs", { params: result });
    });
});

// маршрут для обработки входа и регистрации
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/controllers/send-message-controller',sendmessageController.sendmessage);
app.post('/controllers/send-password-controller',sendpasswordController.sendpassword);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller',authenticateController.authenticate);
app.post('/controllers/send-message-controller',sendmessageController.sendmessage);
app.post('/controllers/send-password-controller',sendpasswordController.sendpassword);

app.listen(8012);