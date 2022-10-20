const knex = require("knex");
module.exports = {
  client: "sqlite3",
  connection: {
    filename: "../db/sqlite/ecommerce.sqlite",
  },
  useNullAsDefault: true,
};
