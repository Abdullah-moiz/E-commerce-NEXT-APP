import nodemailer from 'nodemailer';

async function sendVerificationEmail(email, code) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    console.log(process.env.username , process.env.password);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        
        auth: {
            user:`${process.env.username}`, // generated ethereal user
            pass: `${process.env.password}`, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"E-commerce App 👻"', // sender address
        to: email, // list of receivers
        subject: "Verification Code", // Subject line
        text: `Here is your code ${code}`, // plain text body
        html: `<html>
        <head>
          <style>
            .container {
              width: 500px;
              margin: 0 auto;
              text-align: center;
              font-family: Arial, sans-serif;
            }
            .header {
              background-color: #F1F1F1;
              padding: 20px;
            }
            .header h1 {
              font-size: 24px;
              color: #333;
              margin: 0;
            }
            .verification-code {
              background-color: #333;
              color: #fff;
              font-size: 48px;
              padding: 20px;
              margin-top: 20px;
            }
            .footer {
              background-color: #F1F1F1;
              padding: 20px;
              margin-top: 20px;
            }
            .footer p {
              font-size: 14px;
              color: #333;
              margin: 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Email Verification</h1>
            </div>
            <div class="verification-code">
             ${code}
            </div>
            <div class="footer">
              <p>If you did not request this verification code, please ignore this email.</p>
            </div>
          </div>
        </body>
      </html>
      `, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}



module.exports = sendVerificationEmail;