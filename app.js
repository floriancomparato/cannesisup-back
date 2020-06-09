const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("./middleware/cors");
const sendMail = require("./helper/Helper");


const routeFormulaire = require("./routes/routeFormulaire");
const routeUserRouter = require("./routes/routeUser");
const routeAnnuaire = require("./routes/routeAnnuaire");
const routeMembre = require("./routes/routeMembre");
const routeAdmin = require("./routes/routeAdmin");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"))); //?? images ??
app.use(cors.handle);
app.use(sendMail); //envoi mail via ovh

app.use("/user", routeUserRouter); // affichage + login + forgotpassword
app.use("/annuaire", routeAnnuaire); //affichage liste user dans annuaire + fiche detailée
app.use("/formulaire", routeFormulaire); // submit user
app.use("/membre", routeMembre); // route pour modif info espace membre
app.use("/admin", routeAdmin); // route pour modif et supression espace admin

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

