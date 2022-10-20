const SQLClient = require("./db/clients/sql.clients.js");
const dbConfig = require("./db/config.js");

const db = new SQLClient(dbConfig);

//punto 1

db.createTable("articulos")
  .then(() => {
    console.log("Table created");
    // punto 2
    const articulos = [
      {
        name: "Calculadora",
        codigo: "calc-1",
        precio: 123.5,
        stock: 500,
      },
      {
        name: "Pc-gamer",
        codigo: "gamer-1",
        precio: 1233.5,
        stock: 100,
      },
      {
        name: "Notebook",
        codigo: "note-1",
        precio: 1430.5,
        stock: 150,
      },
      {
        name: "E-reader",
        codigo: "reader-1",
        precio: 1000.8,
        stock: 300,
      },
      {
        name: "smart-TV",
        codigo: "smart-1",
        precio: 1265.9,
        stock: 600,
      },
    ];

    return db.insertRecords("articulos", articulos);
  })
  .then(() => {
    console.log("Records inserted correctly");

    //punto 3
    return db.getRecords("articulos");
  })
  .then((records) => {
    console.table(records);

    //punto 4

    return db.deleteRecordById("articulos", 3);
  })
  .then(() => {
    console.log("Record deleted correctly");

    //punto 5

    return db.updateRecordById("articulos", 2, {
      stock: 0,
    });
  })
  .then(() => {
    console.log("Record updated correctly");
    return db.getRecords("articulos");
  })
  .then((records) => {
    console.log("Final outcome");
    console.table(records);
  })
  .catch((error) => {
    console.log(error.message);
  })
  .finally(() => {
    db.disconnect();
  });
