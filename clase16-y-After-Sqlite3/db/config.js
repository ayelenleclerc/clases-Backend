const knex = require("knex");
module.exports = {
  mariaDB: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      database: "demo16",
    },
  },
  sqlite: {
    client: "sqlite3",
    connection: {
      filename: "../db/sqlite/clase16.sqlite",
    },
    useNullAsDefault: true,
  },
};
