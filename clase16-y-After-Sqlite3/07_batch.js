const dbConfig = require("./db/config.js");

const knex = require("knex")(dbConfig.mariaDB);

const friends = [
  { name: "Ayelen", lastname: "Leclerc", age: 40, dni: "29555543" },
  { name: "Pedro", lastname: "Lopez", age: 54, dni: "25555546" },
  { name: "Lucas", lastname: "Perez", age: 49, dni: "26755546" },
  { name: "Lucia", lastname: "Sandoval", age: 45, dni: "28155546" },
];

(async () => {
  try {
    console.log("Step1 => Erasing table records...");
    await knex.from("users").del();

    console.log("Step2 => Inserting new batch data...");
    await knex.from("users").insert(friends);

    console.log("Step3 => Retraving all data...");
    let users = await knex
      .from("users")
      .select("id", "name", "lastname", "age");
    console.table(users);

    console.log("Step4 => Inserting one more friend...");
    await knex
      .from("users")
      .insert({ name: "Gunther", age: 42, dni: "25647898" });

    console.log("Step5 => Retrieving updated data...");
    users = await knex.from("users").select("id", "name", "lastname", "age");
    console.table(users);
  } catch (error) {
    console.log(error);
  } finally {
    //cortar coneccion.finally siempre se ejecuta. sin importar el resultado de la peticion.
    knex.destroy();
  }
})(); //usar la clousure
