const nodemailer = require("nodemailer");

const sendMail = async (mail, subject, content) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "6f381b488a1dbf", // generated ethereal user
      pass: "3053c60e4a5ca8", // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: mail, // list of receivers"c1ea587877-c489bf@inbox.mailtrap.io"
    subject: subject, // Subject line
    text: content, // plain text body
    // html: "<b>Coucou toi!!!!!</b>", // html body
  });
};

module.exports = sendMail;
