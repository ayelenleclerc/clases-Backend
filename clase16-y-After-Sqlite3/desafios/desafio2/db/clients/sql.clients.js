const knex = require("knex");

module.exports = class SQLClient {
  constructor(config, tableName) {
    this.tableName = tableName;
    this.knex = knex(config);
  }
  async createTable() {
    const tableExist = await this.knex.schema.hasTable(this.tableName);
    if (tableExist) {
      await this.knex.schema.dropTable(this.tableName);
    } else {
      await this.knex.schema.createTable(this.tableName, (table) => {
        table.increments("id").notNullable().primary();
        table.string("name", 15).notNullable();
        table.string("codigo", 10).notNullable();
        table.float("precio");
        table.integer("stock");
      });
    }
  }

  async insertRecords(items) {
    await this.knex.from(this.tableName).insert(items);
  }

  async getRecords() {
    return await this.knex
      .from(this.tableName)
      .select("id", "name", "codigo", "precio", "stock");
  }

  async deleteRecordById(id) {
    await this.knex.from(this.tableName).where({ id }).del();
  }

  async updateRecordById(id, payload) {
    await this.knex.from(this.tableName).where({ id }).update(payload);
  }

  disconnect() {
    this.knex.destroy();
  }
};
