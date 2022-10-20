const dbConfig = require("./db/config.js");

const knex = require("knex")(dbConfig.mariaDB); //aca le decimos a que base de datos nos queremos conectar.

// injecciones sql EJ: where 1=1;

(async () => {
  try {
    const users = await knex
      .from("users")
      .select("id", "name", "lastname", "age")
      .orderBy("lastname", "desc");

    console.table(users);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
})();
