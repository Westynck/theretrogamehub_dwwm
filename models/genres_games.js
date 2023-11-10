'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genres_Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Genres_Games.init({
    codeGenres: DataTypes.INTEGER,
    codeGames: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Genres_Games',
  });
  return Genres_Games;
};