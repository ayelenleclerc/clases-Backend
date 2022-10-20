const dbConfig = require("./db/config.js");

const knex = require("knex")(dbConfig.mariaDB); //aca le decimos a que base de datos nos queremos conectar.

// injecciones sql EJ: where 1=1;

(async () => {
  try {
    // ALL
    // await knex.from("users").del();
    //por id
    await knex
      .from("users")
      // .del({
      //   columna: 'dato-a-cambiar',
      //  });
      // .where("columna", "operador", "parametro")
      // .del({
      // columna: 'dato-a- cambiar'
      // });
      //por id es como mas se usa
      .where({ id: 1 })
      .del();
    console.log(`User ${id} deleted correctly`);

    console.log("delete finished");
    console.table(users);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
})();
