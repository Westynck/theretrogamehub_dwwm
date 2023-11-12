"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Editors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // un éditeur appartient au minimum à aucun jeu et au maximum à plusieurs jeux (belongsToMany) 0:n
      models.Editors.belongsToMany(models.Games, {
        through: "GamesEditors",
        foreignKey: "codeEditors",
        otherKey: "codeGames",
        as: "games",
      });
    }
  }
  Editors.init(
    {
      codeEditors: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Editors",
    }
  );
  return Editors;
};
