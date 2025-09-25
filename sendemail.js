//sending email

const nodemailer = require('nodemailer');
//Create transporter OBJECT

let transporter = nodemailer.createTransport({
   // service: 'gmail',

   host: 'smtp.gmail.com',
   port:465,
    secure:true,
    auth: {
        user:'24250168prathika@staloysius.ac.in',
        pass:"aimitmangalore"
    },
    tls:{
        rejectUnauthorized:false
    }
});

let emailOptions = {
    from:"24250168prathika@staloysius.ac.in",
    to:"prathikak8@gmail.com",
    subject:"Test email from Node.js",
    text:"Hello, this is a test email sent from a Node.js application!"
};
transporter.sendMail(emailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log("Email sent successfully!");
    }
});


