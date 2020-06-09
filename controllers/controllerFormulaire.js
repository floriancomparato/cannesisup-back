/*CONTROLLERS CONTACT*/

/*Import Model*/
const ModelUser = require("../models/modelUser");
const sendMail = require("../helper/Helper");
const bcrypt = require("bcrypt");

var moment = require("moment");

/*Model*/
const controllerFormulaire = (req, res, next) => {
  console.log(req.body);
  const form = req.body;
  const files = req.files;
  console.log(files);

  // const img = img.data;

  const newForm = new ModelUser({
    mail: form.mail,
    password: bcrypt.hashSync(form.password, 10),
    nomSociete: form.nomSociete,
    adresseSociete: form.adresseSociete,
    complementAdresse: form.complementAdresse,
    codePostal: form.codePostal,
    ville: form.ville,
    tel: form.tel,
    mailPro: form.mailPro,
    urlSite: form.urlSite,
    urlFb: form.urlFb,
    urlInsta: form.urlInsta,
    urlLinkedIn: form.urlLinkedIn,
    urlTwitter: form.urlTwitter,
    secteurActivite: form.secteurActivite,
    descriptionActivite: form.descriptionActivite,
    logo: files ? files.logo[0].filename : null,
    photoCouverture: files ? files.photoCouverture[0].filename : null,
    brochure: files ? files.brochure[0].filename : null,
    nomDuRepresentant: form.nomDuRepresentant,
    prenomDuRepresentant: form.prenomDuRepresentant,
    fonctionDuRepresentant: form.fonctionDuRepresentant,
    citationCiu: form.citationCiu,
    photoPortrait: files ? files.photoPortrait[0].filename : null,
    charte: form.charte,
    rgpd: form.rgpd,
    paiement: form.paiement,
    date: moment().format("D MM YYYY, h:mm"),
  });
  /* On enregistre les info du formulaire dans la collection Atlas*/
  console.log(form, files);
  newForm.save({}, (err) => {
    if (err) {
      res.status(500).send("Not saved on mongoAtlas!");
    } else {
      res.send("formulaire envoyé");
      sendMail("lebocal@gmail.com", "Votre inscription a bien été prise en compte, un lien vous sera envoyé pour les modalité de paiement.", form.mail);
      console.log("Mail Ziosting Envoyé");
    }
  });
};

module.exports = controllerFormulaire;
