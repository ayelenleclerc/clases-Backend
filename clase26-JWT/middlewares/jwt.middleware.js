const jwt = require("jsonwebtoken");
const envConfig = require("../env.config");
const { HTTP_STATUS } = require("../constants/api.constants");
const { errorResponse } = require("../utils/api.utils");

const generateToken = (data) => {
  const token = jwt.sign(data, envConfig.SESSION_SECRET, { expiresIn: 60 });
  return token;
};

const jwtAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(HTTP_STATUS.NOT_AUTHORIZED)
      .json(errorResponse("User is not authorized"));
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, envConfig.SESSION_SECRET, (error, decoded) => {
    if (error) {
      return res
        .status(HTTP_STATUS.NOT_AUTHORIZED)
        .json(errorResponse("User is not authorized"));
    } else {
      req.user = decoded.date;
      next();
    }
  });
};

module.exports = {
  generateToken,
  jwtAuth,
};
