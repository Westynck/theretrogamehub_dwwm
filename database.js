const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
    define: {
      underscored: true,
    },
    logging: false,
  }
);

module.exports = sequelize;
