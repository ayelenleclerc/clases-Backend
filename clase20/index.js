const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("./db/firebase/firebase.config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
console.log("Firebase database connected");

const makeRequest = async () => {
  try {
    let id = 1;
    const db = getFirestore();
    const query = db.collection("usuarios");
    let doc = query.doc(`${id}`);
    //create
    await doc.create({
      nombre: "Ayelen",
      edad: 40,
    });
    console.log("Datos insertados");
  } catch (error) {
    console.log(error.message);
  }
};
makeRequest();
