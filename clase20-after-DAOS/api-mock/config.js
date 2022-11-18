const dotenv = require("dotenv");

dotenv.config();

modules.exports = {
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATASOURCE: process.env.DATASOURCE,
};
