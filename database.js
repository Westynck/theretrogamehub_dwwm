const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    define: {
      underscored: true,
    },
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion établie avec succès");
  })
  .catch((error) => {
    console.log("Erreur en essayant de se connecter à la base de données");
  });

module.exports = sequelize;
