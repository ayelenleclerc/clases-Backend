const firebaseConfig = require("./firebase/firebase.config.json");
const envConfig = require("../config");
module.exports = {
  files: {
    users: "./data/users.json",
    products: "./data/products.json",
  },
  mongodb: {
    uri: `mongodb+srv://Ayelenleclerc:${envConfig.DB_PASSword}@backend.xrrgkdz.mongodb.net/?retryWrites=true&w=majority`,
  },
  firebase: {
    credentials: firebaseConfig,
  },
};
