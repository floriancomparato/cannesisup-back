/*CONTROLLERS annuaire*/

// /Import Model/
const ModelUser = require("../models/modelUser");

const controllerAnnuaire = {
  getAdherents: (req, res, next) => {
    ModelUser.find({}, (err, data) => {
      if (err) {
        res.status(500).end();
      } else {
        res.json(data);
      }
    });
  },
};

module.exports = controllerAnnuaire;
