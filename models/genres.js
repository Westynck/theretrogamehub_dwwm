"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //

    static associate(models) {
      // define association here
      // un genre appartient au minimum à aucun jeu et au maximum à plusieurs jeux (belongsToMany) 0:n
      models.Genres.belongsToMany(models.Games, {
        through: "GamesGenres",
        foreignKey: "codeGenres",
        otherKey: "codeGames",
        as: "games",
      });
    }
  }
  Genres.init(
    {
      codeGenres: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Genres",
    }
  );
  return Genres;
};
