'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editors_Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Editors_Games.init({
    codeEditors: DataTypes.INTEGER,
    codeGames: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Editors_Games',
  });
  return Editors_Games;
};