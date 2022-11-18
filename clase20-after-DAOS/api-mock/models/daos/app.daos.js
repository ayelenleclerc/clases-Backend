const envConfig = require("../../config");

let ProductsDao;
let UsersDao;

switch (envConfig.DATASOURCE) {
  case "mongo":
    UsersDao = require("../daos/users/users.mongo.dao");
    break;
  case "firebase":
    UsersDao = require("../daos/users/users.firebase.dao");
    break;
  default:
    throw new Error("invalid DATASOURCE:");
}

module.exports = {
  UsersDao,
};
