/*Import Model*/

const ModelUser = require("../models/modelUser");

const controllerFiche = {
  detailAdherents: (req, res, next) => {
    // const id = req.query.id;
    ModelUser.findOne({ _id: req.query.id }, (err, data) => {
      if (err) {
        res.status(500).end();
      } else {
        res.json(data);
      }
    });
  },
};

module.exports = controllerFiche;

/*

const ModelUser = require("../models/modelUser");

const controllerFiche = {
  detailAdherents: (req, res, next) => {        
    ModelUser.findOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.status(500).end();
      } else {
        res.json(data);
      }
    });
  },
}; */
