const express = require("express");
var passport = require("passport");
const route = express.Router();
var User = require("../dataBase/user_db");
require("../auth.js");

// route.post("/api/signUp", async (req, res) => {
//   try {
//     await User.signUp(req.body.username, req.body.password);
//     passport.authenticate("local")(req, res, function() {
//       res.sendStatus(200);
//     });
//   } catch (exp) {
//     if (exp.constraint === "usertable_email_key") {
//       res.status(400).jsonp({ error: "Email is already registered." });
//     } else {
//       res.sendStatus(500);
//     }
//   }
// });

route.post("/api/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

route.get("/api/user", (req, res) => {
  res.json(req.user);
});

route.get("/api/logout", function(req, res) {
  req.logout();
  res.sendStatus(200);
});

module.exports = route;
