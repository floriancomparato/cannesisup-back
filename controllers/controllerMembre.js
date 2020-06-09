/* CONTROLLER MEMBRE */

/* IMPORTS */
const fs = require("fs");
const path = require("path");
const ModelUser = require("../models/modelUser");
const bcrypt = require("bcrypt");
const moment = require("moment");

const controllerMembre = {
  getAdherents: (req, res, next) => {
    res.json(req.user);
  },

  putAdherents: (req, res, next) => {
    console.log(req.body);
    const modify = {
      $set: {
        mail: req.body.mail,
        // password: bcrypt.hashSync(form.password, 10),
        nomSociete: req.body.nomSociete,
        adresseSociete: req.body.adresseSociete,
        complementAdresse: req.body.complementAdresse,
        codePostal: req.body.codePostal,
        ville: req.body.ville,
        tel: req.body.tel,
        mailPro: req.body.mailPro,
        urlSite: req.body.urlSite,
        urlFb: req.body.urlFb,
        urlInsta: req.body.urlInsta,
        urlLinkedIn: req.body.urlLinkedIn,
        urlTwitter: req.body.urlTwitter,
        secteurActivite: req.body.secteurActivite,
        descriptionActivite: req.body.descriptionActivite,
        // logo: files ? files.logo[0].filename : null,
        // photoCouverture: files ? files.photoCouverture[0].filename : null,
        // brochure: files ? files.brochure[0].filename : null,
        nomDuRepresentant: req.body.nomDuRepresentant,
        prenomDuRepresentant: req.body.prenomDuRepresentant,
        fonctionDuRepresentant: req.body.fonctionDuRepresentant,
        citationCiu: req.body.citationCiu,
        // photoPortrait: files ? files.photoPortrait[0].filename : null,
        charte: req.body.charte,
        rgpd: req.body.rgpd,
        paiement: req.body.paiement,
        date: moment().format("D MM YYYY, h:mm"),
      },
    };
    ModelUser.updateOne({ _id: req.body._id }, modify)
      .then(() =>

        res.status(200).json({
          message:
            "les propriétés ont bien été remplacé sur votre fiche adhérent.",
        })
      )
      .catch((error) => {
        console.log(error);
        res.status(400).json({
          error:
            "Une erreur est survenue, merci de renouveler votre demande de modifications. ",
        });
      });

    if (req.body.logo) {
      fs.unlink(path.join(__dirname, "../public/image/") + logo.split("/images/").pop(), (err) => {
        if (err) throw err;
        console.log("file deleted");
      });
    }
    if (req.body.photoCouverture) {
      fs.unlink(path.join(__dirname, "../public/image/") + photoCouverture.split("/image/").pop(), (err) => {
        if (err) throw err;
        console.log("file deleted");
      });
    }

    if (req.body.brochure) {
      fs.unlink(path.join(__dirname, "../public/image/") + brochure.split("/image/").pop(), (err) => {
        if (err) throw err;
        console.log("file deleted");
      });
    }

    if (req.body.photoPortrait) {
      fs.unlink(path.join(__dirname, "../public/image/") + photoPortrait.split("/image/").pop(), (err) => {
        if (err) throw err;
        console.log("file deleted");
      });
    }

  },
};

module.exports = controllerMembre;

