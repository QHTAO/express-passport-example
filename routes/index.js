var express = require("express");
var passport = require("passport");
var authenticated = require("../middlewares/authenticated");
var router = express.Router();

router.get("/", authenticated, function (req, res, next) {
  res.render("index", { title: "Express" });
});



router.get("/login", function (req, res, next) {
  res.render("login", {
    title: "Login",
    flash: req.flash("error")[0], //获取LocalStrategyFlash 错误
  });
});




// 登录接口

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// 登出接口

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;
