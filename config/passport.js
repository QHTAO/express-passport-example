const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const customFields = {
  usernameField: "username",
  passwordField: "password",
};

const verifyCallback = (username, password, done) => {
  return done(null, {});
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);
passport.serializeUser((user, done) => {
  done(null, "user.id");
});
passport.deserializeUser((userId, done) => {
  done(null, userId);
});
