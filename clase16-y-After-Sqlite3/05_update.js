const dbConfig = require("./db/config.js");

const knex = require("knex")(dbConfig.mariaDB); //aca le decimos a que base de datos nos queremos conectar.

// injecciones sql EJ: where 1=1;

(async () => {
  try {
    // ALL
    // await knex.from("users").update({});
    //por id
    await knex
      .from("users")
      // .update({
      //   columna: 'dato-a-cambiar',
      //  });
      // .where("columna", "operador", "parametro")
      // .update({
      // columna: 'dato-a- cambiar'
      // });
      //por id es como mas se usa
      .where({ id: 1 })
      .update({
        dni: "22233444",
      });
    console.log(`User ${id} updated correctly`);

    console.log("update finished");
    console.table(users);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
})();
