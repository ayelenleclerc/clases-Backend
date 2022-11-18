const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/mongo.container");

const collection = "users";
const usersSchema = new Schema({
  nombre: { type: "string" },
  email: { type: "string", unique: true },
  website: { type: "string" },
  image: { type: "string" },
})();
class UsersMongoDao extends MongoContainer {
  constructor() {
    super(collection, usersSchema);
  }
}

module.exports = UsersMongoDao;
