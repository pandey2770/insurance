const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const users = require("./routes/users");
const uploads = require("./routes/uploads");
const staticData = require("./routes/staticData");
process.env.TZ = "Asia/Calcutta";
const app = express();

// TODO: evaluate using hyphen in place of underscore

function loadMiddleWares(app, express) {
  app.use(
    session({
      secret: "ssdn",
      resave: false,
      saveUninitialized: true
    })
  );

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(bodyParser.json());
  app.use(bodyParser.raw());

  const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).send();
  };

  app.get("/api/user", users);
  app.get("/api/logout", isAuthenticated, users);
  app.get("/api/getCityName", isAuthenticated, staticData);
  app.get("/api/getPinCode", isAuthenticated, staticData);
  app.post("/api/login", users);
  app.post("/api/uploadStateFile", isAuthenticated, uploads);
}

module.exports = loadMiddleWares;
