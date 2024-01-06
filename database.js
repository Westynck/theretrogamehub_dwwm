const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.PG_URL, {
  logging: console.log,
});

module.exports = sequelize;
