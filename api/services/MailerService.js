"use strict"; 

var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');
var creds = require('../../../mail-cred.json');

var transport = nodemailer.createTransport(sesTransport({
    accessKeyId: creds.id,
    region: "eu-west-1",
    secretAccessKey: creds.key,
    rateLimit: 10 // do not send more than 5 messages in a second
}));

transport.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to take our messages');
   }
});
"use strict";

module.exports = {

    sendMail: function (arr,cb) {
       	if(!arr)
	{
		return cb("no input arr, expected [{to,from,jubject,html},{}]");
	} 
	for(let i=0 ; i<arr.length ; i++){
	     var mailOptions = {
                to: arr[i].to,
                from: arr[i].from,
                subject: arr[i].subject,    
                html: arr[i].html
            };
            transport.sendMail(mailOptions, function(err, info) {
                 //re-render contact page with message
                if(err){
                     console.log(err);
                } else {
                     console.log('Message sent: ' + info);
                }  
             });   
	}
        cb(null ,"emails added to mailer");  
    }
	
};
