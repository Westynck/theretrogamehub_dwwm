'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Platforms_Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Platforms_Games.init({
    codePlatforms: DataTypes.INTEGER,
    codeGames: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Platforms_Games',
  });
  return Platforms_Games;
};