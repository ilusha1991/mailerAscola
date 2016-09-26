
var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');

var transport = nodemailer.createTransport(sesTransport({
    accessKeyId: "AKIAJK2NTZ7HD3SMFKAA",
    region: "eu-west-1",
    secretAccessKey: "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",
    rateLimit: 10 // do not send more than 5 messages in a second
}));
transport.verify(function(error, success) {
   if (error) {
        console.log(error);
   } else {
        console.log('Server is ready to take our messages');
   }
});




module.exports = {
    sendMail: function (arr,cb) {
       	if(!arr)
	{
		return cb("no input arr");
	} 
	for(let i=0 ; i<arr.length ; i++){
	     var mailOptions = {
                to: arr[i].to,
                from: 'test@mail.getascola.com',
                subject: arr[i].subject,    
                html: '<b>Hello</b>'
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
	
}
