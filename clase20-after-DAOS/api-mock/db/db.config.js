const firebaseConfig = require("./firebase/firebase.config.json");
module.exports = {
  files: {
    users: "./data/users.json",
    products: "./data/products.json",
  },
  mongodb: {
    uri: "mongodb+srv://Ayelenleclerc:Yuskia13@backend.xrrgkdz.mongodb.net/?retryWrites=true&w=majority",
  },
  firebase: {
    credentials: firebaseConfig,
  },
};
