/**
 * MailController
 *
 * @description :: Server-side logic for managing mails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var nodemailer = require('nodemailer');
var sesTransport = require('nodemailer-ses-transport');


module.exports = {
	


  /**
   * `MailController.sendOne()`
   */
  sendOne: function (req, res) {

    return res.json({
      todo: 'sendOne() is not implemented yet!'
    });
  },


  /**
   * `MailController.sendBulk()`
   */
    sendBulk: function (req, res) {
 	  
	MailerService.sendMail(req.body , function(err,data){
                if (err) {
          	       console.log(err);
		       return res.serverError();
        	}else{
	        	console.log(data);
	        	return res.ok();
         	}  
     
           
	})
    }
};

