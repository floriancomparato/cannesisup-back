/* ROUTE MEMBRE */

/*IMPORTS */
const authentication = require("../middleware/authentication");
const express = require("express");
const router = express.Router();
const controllerMembre = require("../controllers/controllerMembre");

/* VERBS */
router.post("/", authentication, controllerMembre.getAdherents);


module.exports = router;
