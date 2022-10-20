const dbConfig = require("./db/config.js");

const knex = require("knex")(dbConfig.mariaDB); //aca le decimos a que base de datos nos queremos conectar.

const newUser = {
  name: "Ayelen",
  lastname: "Leclerc",
  age: 40,
  dni: "29555546",
};
// const multipleUsers = [
//   { name: "Ayelen", lastname: "Leclerc", age: 40, dni: "29555543" },
//   { name: "Pedro", lastname: "Lopez", age: 54, dni: "25555546" },
//   { name: "Lucas", lastname: "Perez", age: 49, dni: "26755546" },
//   { name: "Lucia", lastname: "Sandoval", age: 45, dni: "28155546" },
// ];

(async () => {
  try {
    //single insert
    await knex("users").insert(newUser); //.insert(multipleUsers); //
    console.log("User insert success");
  } catch (error) {
    console.log(error);
  } finally {
    //cortar coneccion.finally siempre se ejecuta. sin importar el resultado de la peticion.
    knex.destroy();
  }
})(); //usar la clousure
