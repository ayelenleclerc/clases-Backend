const auth = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }
  return res.status(401).redirect("/unauthorized");
};

module.exports = auth;
