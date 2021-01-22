var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var sendmessageController=require('./controllers/send-message-controller');
var sendpasswordController=require('./controllers/send-password-controller');
//var postMessage=require('./controllers/post-message');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('views'));

// устанавливает дейсвующие файлы
app.set("views engine", "html");

// возвращаем форму для добавления данных
app.get("/", function(req, res){
    res.sendFile("index.html");
});
 
// маршрут для обработки входа и регистрации
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/controllers/send-message-controller',sendmessageController.sendmessage);
app.post('/controllers/send-password-controller',sendpasswordController.sendpassword);
//app.post('/controllers/post-message',postMessage.postmessage);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller',authenticateController.authenticate);
app.post('/controllers/send-message-controller',sendmessageController.sendmessage);
app.post('/controllers/send-password-controller',sendpasswordController.sendpassword);
//app.post('/controllers/post-message',postMessage.postmessage);

app.listen(8012);