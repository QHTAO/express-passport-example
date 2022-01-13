module.exports = (req, res, next) => {
  //判断用户是否已登录
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
};
