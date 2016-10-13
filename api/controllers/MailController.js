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
      console.log(req.body);
      if (err) {
        console.log(err);
        return res.send(err);
      }else{
        console.log(data);
        return res.send(data);
      }  
    });
  }
};

