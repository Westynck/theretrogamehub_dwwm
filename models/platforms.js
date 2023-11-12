"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Platforms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // une plateforme appartient au minimum à aucun jeu et au maximum à un jeu (belongsToMany) 0:n
      models.Platforms.belongsToMany(models.Games, {
        through: "GamesPlatforms",
        foreignKey: "codePlatforms",
        otherKey: "codeGames",
        as: "games",
      });
      // une plateforme appartient au minimum à aucune collection et au maximum à plusieurs collections (belongsToMany) 0:n
      models.Platforms.belongsToMany(models.Collections, {
        through: "GamesPlatforms",
        foreignKey: "codePlatforms",
        otherKey: "codeCollections",
        as: "collections",
      });
    }
  }
  Platforms.init(
    {
      codePlatforms: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      releaseDate: DataTypes.DATE,
      state: DataTypes.STRING,
      manufacturer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Platforms",
    }
  );
  return Platforms;
};
