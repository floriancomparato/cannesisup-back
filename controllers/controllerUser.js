/**
 * controller sign in infos
 */

// / Import /
const User = require("../models/modelUser");

// / package création token d'identification /
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

// / Controller /
const controllerUser = (req, res, next) => {
  // / recherche email /
  User.findOne({ mail: req.body.mail })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      console.log(user);
      // / quand utilisateur trouvé comparaison password /
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ error: "Mot de passe incorrect !", exist: false });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) =>
          res.status(500).json({ error: "id ou mdp incorrect" })
        );
    })
    .catch((error) => res.status(500).json({ error }));
};

// / Export */
module.exports = controllerUser;
