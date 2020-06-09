const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");


const controllerUser = require("../controllers/controllerUser");
// const forgotPassword = require("../controllers/forgotPassword");

router.get("/", function (req, res, next) {});

/* POST login. */
router.post("/login", controllerUser);

/* POST new password. */
// router.post("/password", forgotPassword.createNewPassword);

module.exports = router;
