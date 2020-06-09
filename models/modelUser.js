const mongoose = require("mongoose");

const ModelUser = mongoose.model("ModelUser", {
  mail: String,
  password: String,
  confirmationMotDePasse: String,
  nomSociete: String,
  adresseSociete: String,
  complementAdresse: String,
  codePostal: String,
  ville: String,
  tel: String,
  mailPro: String,
  urlSite: String,
  urlFb: String,
  urlInsta: String,
  urlLinkedIn: String,
  urlTwitter: String,
  secteurActivite: String,
  descriptionActivite: String,
  logo: String,
  photoCouverture: String,
  brochure: String,
  nomDuRepresentant: String,
  prenomDuRepresentant: String,
  fonctionDuRepresentant: String,
  citationCiu: String,
  photoPortrait: String,
  charte: String,
  rgpd: String,
  paiement: String,
  date: String
},

  // role: String,
  // active: Boolean,
);

module.exports = ModelUser;

