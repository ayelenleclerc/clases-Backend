const knex = require("knex");

module.exports = class SQLClient {
  constructor(config) {
    this.knex = knex(config);
  }
  createTable(tableName) {
    return this.knex.schema.hasTable(tableName).then((response) => {
      if (!response) {
        return this.knex.schema.createTable(tableName, (table) => {
          table.increments("id").notNullable().primary();
          table.string("name", 15).notNullable();
          table.string("codigo", 10).notNullable();
          table.float("precio");
          table.integer("stock");
        });
      }
    });
  }
  insertRecords(tableName, items) {
    return this.knex.from(tableName).insert(items);
  }

  getRecords(tableName) {
    return this.knex
      .from(tableName)
      .select("id", "name", "codigo", "precio", "stock");
  }

  deleteRecordById(tableName, id) {
    return this.knex.from(tableName).where({ id }).del();
  }

  updateRecordById(tableName, id, payload) {
    return this.knex.from(tableName).where({ id }).update(payload);
  }

  disconnect() {
    this.knex.destroy();
  }
};
