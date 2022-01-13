const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const customFields = {
  usernameField: "username",
  passwordField: "password",
};

const verifyCallback = (username, password, done) => {
  if (username === "abc" && password === "123456") {
    return done(null, { username, password });
  } else {
    return done(null, false, { message: "用户名或密码错误." });
  }
};

const strategy = new LocalStrategy(customFields, verifyCallback);
passport.use(strategy); // 设置本地验证策略

passport.serializeUser((user, done) => {
  done(null, "user.id");
});
passport.deserializeUser((userId, done) => {
  done(null, userId);
});
