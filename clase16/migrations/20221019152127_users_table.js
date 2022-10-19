const knex = require("knex");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// logica para crear tabla, importante que asegurarse que la tabla que creamos sea unica.entonces usamos el ifNotExist, aunque es de mala practica, entonces usamos hasTable.
module.exports.up = async function (knex) {
  const exists = await knex.schema.hasTable("users");
  if (!exists) {
    return knex.schema.createTable("users", (table) => {
      table.increments("id"); //asi definimos el primary key con el metodo increments, si es una sola incremental la toma como primary.tambien se le puede dar el atributo primary pero hay que buscar la forma en la documentacion.
      table.string("name").notNullable().defaultTo("N/A"); // nombre columna y como 2do param, longitud, por defecto toma 255, luedo es en NOT NULL, y el DEFAULT que usamos en sql.

      table.string("lastname");
      table.integer("age");
      table.string("dni").notNullable().unique();
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//aca la logica para eliminar la tabla
module.exports.down = async function (knex) {
  const exists = await knex.schema.hasTable("users");
  if (exists) {
    return knex.schema.dropTable("users");
  }
};
