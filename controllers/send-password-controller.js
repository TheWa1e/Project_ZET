var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');

var connection = require('./../config');

var nodemailer = require("nodemailer");

module.exports.sendpassword=function(req,res){

  var email=req.body.lostemail;

  connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
    if (error){
      res.json({
        status:false,
        message:'there are some error with query'
      })
    }else{
      if(results.length >0){
        decryptedString = cryptr.decrypt(results[0].password);
        if(email==results[0].email){
          password = decryptedString;
          async function main(textMail){

            let transporter = nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: 465,
            secure: true, 
            auth: {
              user: "the.wale@yandex.ru",
              pass: "TheWale0715"
            }
          });

          let info = await transporter.sendMail({
            from: '"the.wale@yandex.ru"', // sender address
            to: email, // list of receivers
            subject: "ZET Company", // Subject line
            text:textMail, // plain text body
          });

          console.log("Message sent: %s", info.messageId);

          }
          main(password).catch(console.error);

          res.redirect("./../");
        }
      }
      else{
        res.json({
          status:false,    
          message:"Email does not exits"
        });
      }
    }
  });
}
