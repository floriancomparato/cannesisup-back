/* ROUTE Annuaire */
/* Imports */

const express = require("express");
const router = express.Router();
const controllerAnnuaire = require("../controllers/controllerAnnuaire");
const controllerFiche = require("../controllers/controllerFiche");

/* VERBS */

/* GET affichage dans annuaire */
router.get("/", controllerAnnuaire.getAdherents);


/* GET affichage dans fiche */
router.get("/detail", controllerFiche.detailAdherents);



module.exports = router;

