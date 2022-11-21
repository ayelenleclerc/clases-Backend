const adminAuth = (req, res, next) => {
  if (req.session && req.session.admin) {
    return next();
  }
  return res.status(401).redirect("/unauthorized");
};

module.exports = adminAuth;
