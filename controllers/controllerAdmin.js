/* CONTROLLER ADMIN */

/* IMPORTS */

const ModelUser = require("../models/modelUser");

const controllerAdmin = {
  getAdherents: (req, res, next) => {
    ModelUser.find({}, (err, data) => {
      if (err) {
        res.status(500).end();
      } else {
        res.json(data);
      }
    });
  },
  putAdherents: (req, res, next) => {
    // const id = req.body.id;
    // ModelUser.update({ _id: id }, (err, data) => {
    // const id = req.user._id;
    // ModelUser.updateOne({ _id: id }, (err, data) => {
    //   if (err) {
    //     res.status(500).end();
    //   } else {
    //     res.json(data);
    //   }
    // });
  },
  deleteAdherents: (req, res, next) => {
    const id = req.body.id;
    ModelUser.deleteOne({ _id: id }, (err, data) => {
      if (err) {
        res.status(500).end();
      } else {
        res.send("supprimé");
      }
    });
  },
};

module.exports = controllerAdmin;
