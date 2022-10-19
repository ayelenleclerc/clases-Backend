const dbConfig = require("./db/config.js");

const knex = require("knex")(dbConfig.mariaDB); //aca le decimos a que base de datos nos queremos conectar.

// injecciones sql EJ: where 1=1;

(async () => {
  try {
    const users = await knex
      .from("users")
      .select("id", "name", "lastname", "age");
    //   .where({ age: 40 })
    //   .orWhere({ name: "Tatiana" });
    //   .andWhere({ name: "Ayelen" });
    //   .where("name", "like", "%e%");
    //   .where("age", "in", [34, 50]);
    //   .where("columna", "cualquier operador que vimos", "dato o parametro");

    console.table(users);
  } catch (error) {
    console.log(error);
  } finally {
    //cortar coneccion.finally siempre se ejecuta. sin importar el resultado de la peticion.
    knex.destroy();
  }
})(); //usar la clousure
