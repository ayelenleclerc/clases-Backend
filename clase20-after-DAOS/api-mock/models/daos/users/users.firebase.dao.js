const FirebaseContainer = require("../../containers/firebase.container");

class UsersFirebaseDao extends FirebaseContainer {
  constructor() {
    super(collection);
  }
}

module.exports = UsersFirebaseDao;
