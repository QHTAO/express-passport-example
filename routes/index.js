var express = require("express");
var passport = require("passport");
var authenticated = require("../middlewares/authenticated");
var router = express.Router();

/* GET home page. */
router.get("/", authenticated, function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/login", function (req, res, next) {
  res.render("login", {
    title: "Login",
    flash: req.flash("error")[0], //获取LocalStrategyFlash 错误
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

module.exports = router;
