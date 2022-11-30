const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  visits: { type: String },
});
module.exports = UserSchema;
