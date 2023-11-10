'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developers_Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Developers_Games.init({
    codeDevelopers: DataTypes.INTEGER,
    codeGames: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Developers_Games',
  });
  return Developers_Games;
};