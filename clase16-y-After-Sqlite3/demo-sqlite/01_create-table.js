const dbConfig = require("../db/config.js");

const knex = require("knex")(dbConfig.sqlite); //aca le decimos a que base de datos nos queremos conectar.

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
    const tableExists = await knex.schema.hasTable("users");
    if (!tableExists) {
      await knex.schema.createTable("users", (table) => {
        table.increments("id");
        table.string("name").notNullable().defaultTo("N/A");
        table.string("lastname");
        table.integer("age");
        table.string("dni").notNullable().unique();
      });
      console.log("Table created successfully");
    }
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
})();
