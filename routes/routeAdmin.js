/* ROUTE MEMBRE */

/*IMPORTS */
const authentication = require("../middleware/authentication");
const express = require("express");
const router = express.Router();
const controllerAdmin = require("../controllers/controllerAdmin");

/* VERBS */
/* GET affichage dans annuaire */
router.get("/", controllerAdmin.getAdherents);
router.put("/modification", authentication, controllerAdmin.putAdherents);
router.delete("/suppression", controllerAdmin.deleteAdherents);

module.exports = router;
