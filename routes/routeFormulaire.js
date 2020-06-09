/* ROUTE formulaire /
/ Imports ///**/

var multer = require('../middleware/config_multer')
const express = require("express");
const router = express.Router();
const controllerFormulaire = require("../controllers/controllerFormulaire");
const controllerMembre = require("../controllers/controllerMembre");
const authentication = require("../middleware/authentication")


// / VERBS */
router.post("/", multer, controllerFormulaire);
router.put("/modify", controllerMembre.putAdherents);

module.exports = router;
