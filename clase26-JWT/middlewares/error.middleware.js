const { errorResponse } = require("../utils/api.utils");

const error = (req, res, next) => {
  return res
    .status(error.statusCode || 500)
    .json(errorResponse(error.message, error));
};

module.exports = error;
