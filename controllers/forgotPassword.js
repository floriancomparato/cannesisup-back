const user = require("../models/modelUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const forgotPassword = {
  createNewPassword: (req, res, next) => {
    const [mail, password] = [req.body.mail, req.body.password];
    user
      .findOne({ mail: mail, _id: req.params.id })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: "Email incorrect" });
        }
        user.updateOne({ mail: mail }, { password: password }).then(() => {
          return res.status(401).json({ message: "Mot de passe changé !" });
        });
      })
      .catch((error) => res.status(500).json({ message: error }));
  },
};

module.exports = forgotPassword;
