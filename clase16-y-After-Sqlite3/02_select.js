const dbConfig = require("./db/config.js");

const knex = require("knex")(dbConfig.mariaDB); //aca le decimos a que base de datos nos queremos conectar.

(async () => {
  try {
    const users = await knex.from("users").select("id", "name", "age");
    console.table(users);
  } catch (error) {
    console.log(error);
  } finally {
    //cortar coneccion.finally siempre se ejecuta. sin importar el resultado de la peticion.
    knex.destroy();
  }
})(); //usar la clousure
