const SQLClient = require("./db/clients/sql.clients.js");
const dbConfig = require("./db/config.js");

const db = new SQLClient(dbConfig, "articulos");
(async () => {
  try {
    //Punto 1
    await db.createTable();
    console.log("Table created");

    //Punto 2
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

    await db.insertRecords(articulos);
    console.log("Records inserted");

    //Punto 3
    const records = await db.getRecords();
    console.table(records);

    //Punto 4
    await db.deleteRecordById(3);
    console.log("Record deleted");

    // Punto 5
    await db.updateRecordById(2, {
      stock: 0,
    });
    console.log("Record updated");

    console.log("Final outcome");
    const updatedRecords = await db.getRecords();
    console.table(updatedRecords);
  } catch (error) {
    console.log(error);
  } finally {
    db.disconnect();
  }
})();
